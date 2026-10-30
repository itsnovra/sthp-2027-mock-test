import React, { useState } from 'react';
import { X, Delete, RotateCcw, Calculator } from 'lucide-react';

interface ScientificCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScientificCalculator: React.FC<ScientificCalculatorProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  if (!isOpen) return null;

  const handleInput = (val: string) => {
    if (display === '0' || display === 'Error') {
      setDisplay(val);
    } else {
      setDisplay(prev => prev + val);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleBackspace = () => {
    if (display.length > 1 && display !== 'Error') {
      setDisplay(prev => prev.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleFunction = (fn: string) => {
    try {
      const current = parseFloat(display);
      if (isNaN(current)) return;
      let res = 0;
      switch (fn) {
        case 'sin':
          // in degrees
          res = Math.sin((current * Math.PI) / 180);
          break;
        case 'cos':
          res = Math.cos((current * Math.PI) / 180);
          break;
        case 'tan':
          res = Math.tan((current * Math.PI) / 180);
          break;
        case 'log':
          if (current <= 0) throw new Error('Invalid');
          res = Math.log10(current);
          break;
        case 'ln':
          if (current <= 0) throw new Error('Invalid');
          res = Math.log(current);
          break;
        case 'sqrt':
          if (current < 0) throw new Error('Invalid');
          res = Math.sqrt(current);
          break;
        case 'square':
          res = Math.pow(current, 2);
          break;
        case 'percent':
          res = current / 100;
          break;
        default:
          return;
      }
      const rounded = Number(res.toFixed(6));
      setDisplay(String(rounded));
      setExpression(`${fn}(${current}) = ${rounded}`);
    } catch {
      setDisplay('Error');
    }
  };

  const handleEvaluate = () => {
    try {
      // Clean display expression for evaluation
      // Replace symbols safely
      let sanitized = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/\^/g, '**');

      // Restrict characters strictly to numbers, math operators, and parens
      if (!/^[0-9+\-*/().\s*]+$/.test(sanitized)) {
        setDisplay('Error');
        return;
      }

      // Safe calculation using Function constructor with no global scope
      const result = new Function(`'use strict'; return (${sanitized})`)();
      if (result === Infinity || result === -Infinity || isNaN(result)) {
        setDisplay('Error');
      } else {
        const rounded = Number(Number(result).toFixed(6));
        setExpression(`${display} =`);
        setDisplay(String(rounded));
      }
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center space-x-2 text-slate-700 font-semibold text-sm">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Scientific Calculator</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Display Screen */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 text-right">
          <div className="text-xs text-slate-400 font-mono h-4 truncate">
            {expression || ''}
          </div>
          <div className="text-2xl font-mono font-bold text-slate-800 tracking-tight truncate mt-1">
            {display}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="p-3 grid grid-cols-5 gap-1.5 text-xs font-semibold">
          {/* Scientific row 1 */}
          <button onClick={() => handleFunction('sin')} className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700">sin</button>
          <button onClick={() => handleFunction('cos')} className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700">cos</button>
          <button onClick={() => handleFunction('tan')} className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700">tan</button>
          <button onClick={() => handleFunction('log')} className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700">log</button>
          <button onClick={handleClear} className="p-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold">C</button>

          {/* Scientific row 2 */}
          <button onClick={() => handleFunction('sqrt')} className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700">√</button>
          <button onClick={() => handleInput('^')} className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700">xʸ</button>
          <button onClick={() => handleInput('(')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700">(</button>
          <button onClick={() => handleInput(')')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700">)</button>
          <button onClick={handleBackspace} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center">
            <Delete className="w-3.5 h-3.5" />
          </button>

          {/* Numbers & basic ops */}
          <button onClick={() => handleInput('7')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">7</button>
          <button onClick={() => handleInput('8')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">8</button>
          <button onClick={() => handleInput('9')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">9</button>
          <button onClick={() => handleInput('÷')} className="p-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm">÷</button>
          <button onClick={() => handleFunction('percent')} className="p-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700">%</button>

          <button onClick={() => handleInput('4')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">4</button>
          <button onClick={() => handleInput('5')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">5</button>
          <button onClick={() => handleInput('6')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">6</button>
          <button onClick={() => handleInput('×')} className="p-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm">×</button>
          <button onClick={() => handleFunction('square')} className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700">x²</button>

          <button onClick={() => handleInput('1')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">1</button>
          <button onClick={() => handleInput('2')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">2</button>
          <button onClick={() => handleInput('3')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">3</button>
          <button onClick={() => handleInput('-')} className="p-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm">-</button>
          <button onClick={() => handleInput('.')} className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">.</button>

          {/* Bottom row */}
          <button onClick={() => handleInput('0')} className="col-span-2 p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm">0</button>
          <button onClick={() => handleInput('+')} className="p-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm">+</button>
          <button onClick={handleEvaluate} className="col-span-2 p-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs">=</button>
        </div>

        <div className="px-4 py-2 bg-slate-50 text-[10px] text-slate-500 text-center border-t border-slate-200">
          Angles in degrees (0° - 360°)
        </div>

      </div>
    </div>
  );
};
