import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const TwoSumVisualization = () => {
  const [nums, setNums] = useState([2, 7, 11, 15]);
  const [target, setTarget] = useState(9);
  const [step, setStep] = useState(0);
  const [hashMap, setHashMap] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [complement, setComplement] = useState(null);
  const [solution, setSolution] = useState(null);
  const [customInput, setCustomInput] = useState('');
  const [customTarget, setCustomTarget] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepCount, setStepCount] = useState(0);
  const [testCases, setTestCases] = useState([
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 },
  ]);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(() => {
        handleStep();
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, nums, target, hashMap, currentIndex, solution]);

  const handleStep = () => {
    if (step < nums.length && !solution) {
      setStep(step + 1);
      setStepCount(stepCount + 1);
      const newHashMap = { ...hashMap };
      const newComplement = target - nums[currentIndex];
      setComplement(newComplement);

      if (newComplement in newHashMap) {
        setSolution([newHashMap[newComplement], currentIndex]);
      } else {
        newHashMap[nums[currentIndex]] = currentIndex;
        setHashMap(newHashMap);
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const resetVisualization = () => {
    setStep(0);
    setHashMap({});
    setCurrentIndex(0);
    setComplement(null);
    setSolution(null);
    setStepCount(0);
    setIsPlaying(false);
  };

  const addCustomTestCase = () => {
    const newNums = customInput.split(',').map(num => parseInt(num.trim()));
    const newTarget = parseInt(customTarget);
    if (newNums.every(num => !isNaN(num)) && !isNaN(newTarget)) {
      setTestCases([...testCases, { nums: newNums, target: newTarget }]);
      setCustomInput('');
      setCustomTarget('');
    } else {
      alert('Invalid input');
    }
  };

  const runTestCase = (index) => {
    const { nums: newNums, target: newTarget } = testCases[index];
    setNums(newNums);
    setTarget(newTarget);
    resetVisualization();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white">

      <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Two Sum Visualization
        </h2>

        {/* Inputs */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <label className="block mb-2 text-gray-300">Input Array:</label>
            <input
              type="text"
              value={nums.join(', ')}
              onChange={(e) => setNums(e.target.value.split(',').map(Number))}
              className="p-2 border border-gray-600 bg-gray-700 text-white rounded-lg w-full"
            />

            <label className="block mt-4 mb-2 text-gray-300">Target:</label>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="p-2 border border-gray-600 bg-gray-700 text-white rounded-lg w-full"
            />
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3 text-gray-300">Add Custom Test Case</h3>

            <input
              type="text"
              placeholder="Array"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="mb-3 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg w-full"
            />

            <input
              type="number"
              placeholder="Target"
              value={customTarget}
              onChange={(e) => setCustomTarget(e.target.value)}
              className="mb-3 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg w-full"
            />

            <button
              onClick={addCustomTestCase}
              className="bg-green-500 w-full py-2 rounded-lg hover:bg-green-600"
            >
              Add Test Case
            </button>
          </div>
        </div>

        {/* Test Cases */}
        <div className="mb-6">
          <h3 className="text-xl mb-3 text-gray-300">Test Cases</h3>
          <div className="flex gap-3 flex-wrap">
            {testCases.map((_, index) => (
              <button
                key={index}
                onClick={() => runTestCase(index)}
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Case {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Array */}
        <div className="mb-6">
          <h3 className="text-xl mb-3 text-gray-300">Array</h3>
          <div className="flex gap-3 flex-wrap">
            {nums.map((num, index) => (
              <div
                key={index}
                className={`w-14 h-14 flex items-center justify-center rounded-xl border transition
                ${index === currentIndex ? 'bg-yellow-400 text-black scale-110' : 'bg-gray-800'}
                ${solution && solution.includes(index) ? 'bg-green-500' : ''}`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* HashMap */}
        <div className="mb-6">
          <h3 className="text-xl mb-3 text-gray-300">Hash Map</h3>
          {Object.entries(hashMap).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg mb-2">
              <div className="px-3 py-2 bg-gray-700 rounded-lg">{key}</div>
              <ArrowRight />
              <div className="px-3 py-2 bg-gray-700 rounded-lg">{value}</div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mb-6 bg-gray-800 p-4 rounded-xl">
          <p>Current: {nums[currentIndex]}</p>
          <p>Complement: {complement}</p>
          <p>Steps: {stepCount}</p>
        </div>

        {/* Complexity */}
        <div className="mb-6 bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold mb-3 text-blue-400">
            Complexity Analysis
          </h3>

          <div className="flex justify-between">
            <span>Time Complexity</span>
            <span className="text-green-400 font-semibold">O(n)</span>
          </div>

          <div className="flex justify-between mt-2">
            <span>Space Complexity</span>
            <span className="text-yellow-400 font-semibold">O(n)</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-6">
          <button onClick={() => setStep(Math.max(0, step - 1))} className="bg-gray-700 p-3 rounded-lg">
            <SkipBack />
          </button>

          <button onClick={() => setIsPlaying(!isPlaying)} className="bg-blue-600 p-3 rounded-lg">
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button onClick={handleStep} className="bg-gray-700 p-3 rounded-lg">
            <SkipForward />
          </button>

          <button onClick={resetVisualization} className="bg-red-500 px-4 py-3 rounded-lg">
            Reset
          </button>
        </div>

        {/* Result */}
        {solution && (
          <div className="mt-6 p-5 bg-green-600/20 border border-green-500 rounded-xl text-center">
            <Check className="inline-block mr-2" />
            Solution: [{solution.join(', ')}]
          </div>
        )}

      </div>
    </div>
  );
};

export default TwoSumVisualization;