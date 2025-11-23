"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { Rocket, Star, Gem, Zap, Play, X } from 'lucide-react';

export default function SpaceAdventureGame({ handleClose }: { handleClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState(50);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [stars, setStars] = useState([]);
  const [obstacles, setObstacles] = useState([]);
  const [gems, setGems] = useState([]);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gameWidth = 100;
  const playerSize = 8;

  // Generate random items
  const generateStar = useCallback(() => ({
    id: Math.random(),
    x: Math.random() * (gameWidth - 5),
    y: -5,
    speed: 1 + Math.random() * 0.5,
  }), []);

  const generateObstacle = useCallback(() => ({
    id: Math.random(),
    x: Math.random() * (gameWidth - 8),
    y: -5,
    speed: 1.5 + level * 0.2,
  }), [level]);

  const generateGem = useCallback(() => ({
    id: Math.random(),
    x: Math.random() * (gameWidth - 5),
    y: -5,
    speed: 1.2,
  }), []);

  // Handle keyboard controls
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setPosition((prev) => Math.max(5, prev - 5));
      } else if (e.key === 'ArrowRight') {
        setPosition((prev) => Math.min(gameWidth - playerSize - 5, prev + 5));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      // Move and generate stars
      setStars((prev) => {
        const updated = prev
          .map((star) => ({ ...star, y: star.y + star.speed }))
          .filter((star) => star.y < 100);

        if (Math.random() < 0.3) {
          updated.push(generateStar());
        }
        return updated;
      });

      // Move and generate obstacles
      setObstacles((prev) => {
        const updated = prev
          .map((obs) => ({ ...obs, y: obs.y + obs.speed }))
          .filter((obs) => obs.y < 100);

        if (Math.random() < 0.02 + level * 0.005) {
          updated.push(generateObstacle());
        }
        return updated;
      });

      // Move and generate gems
      setGems((prev) => {
        const updated = prev
          .map((gem) => ({ ...gem, y: gem.y + gem.speed }))
          .filter((gem) => gem.y < 100);

        if (Math.random() < 0.01) {
          updated.push(generateGem());
        }
        return updated;
      });

      // Check collisions with gems
      setGems((prev) => {
        return prev.filter((gem) => {
          const collision =
            gem.y > 80 &&
            gem.y < 90 &&
            gem.x < position + playerSize &&
            gem.x + 5 > position;

          if (collision) {
            setScore((s) => s + 10);
          }
          return !collision;
        });
      });

      // Check collisions with obstacles
      obstacles.forEach((obs) => {
        const collision =
          obs.y > 80 &&
          obs.y < 90 &&
          obs.x < position + playerSize &&
          obs.x + 8 > position;

        if (collision) {
          setGameOver(true);
        }
      });

      // Increase level
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore % 500 === 0) {
          setLevel((l) => l + 1);
        }
        return newScore;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, obstacles, position, level, generateStar, generateObstacle, generateGem]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPosition(50);
    setStars([]);
    setObstacles([]);
    setGems([]);
    setLevel(1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-6 space-y-4 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <div className="text-center flex-1">
            <h2 className="text-4xl font-semibold text-gray-900 mb-3 flex items-center justify-center gap-3">
              <Rocket className="w-10 h-10 text-blue-500" />
              Space Adventure
            </h2>
            <div className="flex justify-center gap-8 text-gray-700 text-base font-medium">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>Score: {score}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <Gem className="w-4 h-4 text-blue-500" />
                <span>Level: {level}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close game"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {!gameStarted ? (
          <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
            <Rocket className="w-20 h-20 text-blue-500 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Ready for Adventure?</h3>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Use ← → arrow keys to move your spaceship!
              <br />
              Collect <Gem className="inline w-4 h-4 text-blue-500" /> gems and avoid <Zap className="inline w-4 h-4 text-red-500 fill-red-500" /> meteors!
            </p>
            <button
              onClick={startGame}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 mx-auto"
            >
              <Play className="w-5 h-5 fill-white" />
              Start Game
            </button>
          </div>
        ) : (
          <>
            <div
              className="relative w-full bg-gradient-to-b from-indigo-900 via-purple-900 to-black rounded-2xl overflow-hidden shadow-lg"
              style={{ height: '500px' }}
            >
              {/* Background stars */}
              {stars.map((star) => (
                <Star
                  key={star.id}
                  className="absolute text-yellow-300 fill-yellow-300 animate-pulse"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: '12px',
                    height: '12px',
                    opacity: 0.8,
                  }}
                />
              ))}

              {/* Gems */}
              {gems.map((gem) => (
                <Gem
                  key={gem.id}
                  className="absolute text-cyan-400 animate-pulse"
                  style={{
                    left: `${gem.x}%`,
                    top: `${gem.y}%`,
                    width: '24px',
                    height: '24px',
                    filter: 'drop-shadow(0 0 8px cyan)',
                  }}
                />
              ))}

              {/* Obstacles */}
              {obstacles.map((obs) => (
                <Zap
                  key={obs.id}
                  className="absolute text-red-500 fill-red-500"
                  style={{
                    left: `${obs.x}%`,
                    top: `${obs.y}%`,
                    width: '32px',
                    height: '32px',
                    filter: 'drop-shadow(0 0 10px red)',
                    animation: 'spin 1s linear infinite',
                  }}
                />
              ))}

              {/* Player */}
              <Rocket
                className="absolute text-blue-400 transition-all duration-100"
                style={{
                  left: `${position}%`,
                  bottom: '10%',
                  width: '48px',
                  height: '48px',
                  filter: 'drop-shadow(0 0 15px cyan)',
                  transform: 'rotate(-45deg)',
                }}
              />

              {/* Game Over Overlay */}
              {gameOver && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center">
                  <div className="text-center bg-white rounded-3xl p-10 shadow-2xl max-w-sm">
                    <h3 className="text-4xl font-semibold text-gray-900 mb-3">Game Over</h3>
                    <p className="text-gray-600 text-xl mb-2">Final Score: <span className="font-semibold text-gray-900">{score}</span></p>
                    <p className="text-gray-500 text-lg mb-8">Level Reached: {level}</p>
                    <button
                      onClick={startGame}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 mx-auto"
                    >
                      <Play className="w-5 h-5 fill-white" />
                      Play Again
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-base bg-gray-100 rounded-full px-6 py-2 inline-block font-medium">
                Use ← → Arrow Keys to Move
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
