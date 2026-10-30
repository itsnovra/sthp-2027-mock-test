import React from 'react';
import { X, BookOpen } from 'lucide-react';

interface MathFormulasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MathFormulasModal: React.FC<MathFormulasModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formulaCategories = [
    {
      title: '1. Algebra & Polynomials',
      items: [
        '(a + b)² = a² + 2ab + b²',
        '(a - b)² = a² - 2ab + b²',
        'a² - b² = (a - b)(a + b)',
        '(a + b)³ = a³ + 3a²b + 3ab² + b³',
        '(a - b)³ = a³ - 3a²b + 3ab² - b³',
        'a³ + b³ = (a + b)(a² - ab + b²)',
        'a³ - b³ = (a - b)(a² + ab + b²)',
        'Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)',
        'Discriminant D = b² - 4ac (D=0: equal real roots; D>0: distinct real roots; D<0: complex roots)'
      ]
    },
    {
      title: '2. Arithmetic, HCF & LCM',
      items: [
        'HCF × LCM = Product of Two Numbers (A × B)',
        'Fraction Conversion: 0.ā = a/9, 0.āb = ab/99',
        'Laws of Indices: aᵐ × aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ, a⁰ = 1',
        'Logarithms: log(ab) = log a + log b, log(a/b) = log a - log b, log(aᵇ) = b log a'
      ]
    },
    {
      title: '3. Percentages & Interest',
      items: [
        'Percentage = (Part / Total) × 100%',
        '% Increase / Decrease = (|New - Old| / Old) × 100%',
        'Consumption Reduction for Price Hike: [r / (100 + r)] × 100%',
        'Simple Interest: SI = (P × R × T) / 100',
        'Compound Interest: A = P(1 + R/100)ᵀ, CI = A - P'
      ]
    },
    {
      title: '4. Profit, Loss & Discounts',
      items: [
        'Profit = SP - CP (when SP > CP)',
        'Loss = CP - SP (when CP > SP)',
        'Profit % = (Profit / CP) × 100%',
        'Loss % = (Loss / CP) × 100%',
        'Selling Price = CP × (100 + Profit%) / 100',
        'Marked Price (MP) Discount = MP - SP, Discount % = (Discount / MP) × 100%'
      ]
    },
    {
      title: '5. Ratio, Proportion & Averages',
      items: [
        'If a:b = c:d, then ad = bc (Product of extremes = Product of means)',
        'Combined Ratio: If A:B = m:n and B:C = p:q, then A:B:C = (m×p) : (n×p) : (n×q)',
        'Average = (Sum of all observations) / (Total number of observations)',
        'New Observation = (New Count × New Avg) - (Old Count × Old Avg)'
      ]
    },
    {
      title: '6. Speed, Time, Distance & Work',
      items: [
        'Speed = Distance / Time',
        'Conversion: km/h × (5/18) = m/s, m/s × (18/5) = km/h',
        'Relative Speed (Opposite directions): S₁ + S₂',
        'Relative Speed (Same direction): |S₁ - S₂|',
        'Time & Work: If A does work in x days, 1 day work = 1/x',
        'Together: 1-day work = (1/A + 1/B), Total days = (A × B) / (A + B)'
      ]
    },
    {
      title: '7. Geometry & Triangles',
      items: [
        'Sum of angles in any triangle = 180°',
        'Pythagoras Theorem: Hypotenuse² = Base² + Perpendicular² (c² = a² + b²)',
        'Area of Triangle = 1/2 × base × height',
        'Equilateral Triangle: Area = (√3 / 4) × a², Altitude = (√3 / 2) × a',
        'Interior angle of regular n-sided polygon = [(n - 2) × 180°] / n',
        'Sum of interior angles of polygon = (n - 2) × 180°'
      ]
    },
    {
      title: '8. Area, Perimeter & Mensuration',
      items: [
        'Rectangle: Area = l × w, Perimeter = 2(l + w)',
        'Square: Area = a², Perimeter = 4a',
        'Circle: Area = πr², Circumference = 2πr (Take π ≈ 22/7 or 3.1416)',
        'Circular Ring Area = π(R² - r²)',
        'Cylinder: Curved Surface = 2πrh, Total Surface = 2πr(r + h), Volume = πr²h',
        'Sphere: Surface Area = 4πr², Volume = 4/3 πr³'
      ]
    },
    {
      title: '9. Coordinate Geometry & Basic Equations',
      items: [
        'Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]',
        'Slope of line m = (y₂ - y₁) / (x₂ - x₁)',
        'Slope-Intercept form: y = mx + c',
        'Perpendicular lines condition: m₁ × m₂ = -1',
        'Parallel lines condition: m₁ = m₂',
        'Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center space-x-2.5">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="font-bold text-base text-slate-800">STHP Mathematics Formula Reference</h3>
              <p className="text-xs text-slate-500">Quick syllabus formula reference during test</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Formulas List */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {formulaCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-sm text-blue-700 mb-2.5">{cat.title}</h4>
              <ul className="space-y-1.5 text-slate-700 font-mono">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Close Reference
          </button>
        </div>

      </div>
    </div>
  );
};
