import React, { useState, useEffect } from "react";
import { Check, X, Minus } from "lucide-react";
import { DigiLoader } from "./DigiLoader";

export const ComparisonTable = () => {
  const [comparisonData, setComparisonData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComparison = async () => {
      try {
        const res = await fetch("/data/comparison.json");
        if (!res.ok) throw new Error("Failed to fetch JSON");

        const data = await res.json();
        setComparisonData(data);
      } catch (err) {
        console.error("Failed to load comparison data:", err);
        setError("Unable to load comparison data. Try again later.");
      }
    };

    fetchComparison();
  }, []);

  if (error) {
    return (
      <div className="py-20 flex justify-center text-red-600 font-medium">
        {error}
      </div>
    );
  }

  if (!comparisonData) {
    return (
      <div className="py-20 flex justify-center" data-testid="comparison-loading">
        <DigiLoader size={48} />
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "check":
        return <Check className="w-5 h-5 text-green-500" aria-label="Yes" />;
      case "cross":
        return <X className="w-5 h-5 text-red-500" aria-label="No" />;
      case "partial":
        return <Minus className="w-5 h-5 text-yellow-500" aria-label="Partial" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFF]" data-testid="comparison-table-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="comparison-heading"
          >
            How We Compare
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
            The best of all worlds: automation, control, and affordability
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="comparison-table w-full min-w-max" data-testid="comparison-table">
            <thead>
              <tr>
                <th className="text-left">Feature</th>
                <th>DIY</th>
                <th>Freelancer</th>
                <th>Agency</th>
                <th>Tool Stack</th>
                <th className="highlight">Digibility</th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.categories.map((category, idx) => (
                <tr key={idx} data-testid={`comparison-row-${idx}`}>
                  <td className="category-name">{category.name}</td>

                  {/* DIY */}
                  <td>
                    <StatusCell data={category.DIY} getIcon={getStatusIcon} />
                  </td>

                  {/* Freelancer */}
                  <td>
                    <StatusCell data={category.Freelancer} getIcon={getStatusIcon} />
                  </td>

                  {/* Agency */}
                  <td>
                    <StatusCell data={category.Agency} getIcon={getStatusIcon} />
                  </td>

                  {/* Tool Stack */}
                  <td>
                    <StatusCell data={category.ToolStack} getIcon={getStatusIcon} />
                  </td>

                  {/* Digibility Highlight */}
                  <td className="bg-gradient-to-br from-[#6D5CEB]/5 to-[#2DA4EF]/5">
                    <div className="flex flex-col items-center gap-1">
                      {getStatusIcon(category.Digibility.status)}
                      <span className="text-xs font-semibold text-[#4E5674]">
                        {category.Digibility.text}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="/comparison"
            className="btn-secondary inline-flex"
            data-testid="see-full-comparison-link"
          >
            See Full Comparison
          </a>
        </div>
      </div>
    </section>
  );
};

const StatusCell = ({ data, getIcon }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {getIcon(data.status)}
      <span className="text-xs text-[#64748b]">{data.text}</span>
    </div>
  );
};
