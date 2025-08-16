"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

type Props = {
  img: string;
};

const PictureCard = ({ img }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<
    "idle" | "liquify" | "splash" | "reform"
  >("idle");
  const [liquidDrops, setLiquidDrops] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);
  const [glitchLines, setGlitchLines] = useState<
    Array<{ id: number; y: number; width: number; opacity: number }>
  >([]);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate liquid drops for morphing effect
    const drops = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 270,
      y: Math.random() * 320,
      size: 8 + Math.random() * 20,
      delay: Math.random() * 0.5,
    }));
    setLiquidDrops(drops);

    // Generate glitch lines
    const lines = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      y: Math.random() * 320,
      width: 50 + Math.random() * 220,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setGlitchLines(lines);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationPhase("liquify");

    setTimeout(() => setAnimationPhase("splash"), 300);
    setTimeout(() => setAnimationPhase("reform"), 800);
    setTimeout(() => setAnimationPhase("idle"), 1200);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setAnimationPhase("idle");
  };
  return (
    <main
      ref={cardRef}
      className="relative bg-gray-200 pt-5 px-2 overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        filter:
          animationPhase === "liquify" ? "blur(1px) contrast(1.2)" : "none",
        transform: animationPhase === "splash" ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Holographic glitch overlay */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {glitchLines.map((line, index) => (
            <div
              key={line.id}
              className="absolute bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400"
              style={{
                top: `${line.y}px`,
                left: "0px",
                width: `${line.width}px`,
                height: "2px",
                opacity: animationPhase === "liquify" ? line.opacity : 0,
                transform: `translateX(${animationPhase === "splash" ? Math.random() * 50 - 25 : 0}px)`,
                transition: `all 0.2s ease-out ${index * 0.05}s`,
                mixBlendMode: "screen",
              }}
            />
          ))}
        </div>
      )}

      {/* Main card content */}
      <div
        className="relative z-10"
        style={{
          opacity: animationPhase === "splash" ? 0.3 : 1,
          filter:
            animationPhase === "reform"
              ? "hue-rotate(180deg) saturate(1.5)"
              : "none",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <Image
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          alt="profile"
          className="w-[270px] h-[320px] object-contain"
          style={{
            filter:
              animationPhase === "liquify"
                ? "contrast(1.3) brightness(1.1)"
                : "none",
            transform:
              animationPhase === "reform" ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
        />

        <article>
          <p
            className="font-ibm-plex-mono text-gray-600 py-2 pb-16 pl-4"
            style={{
              transform:
                animationPhase === "splash"
                  ? "translateY(10px)"
                  : "translateY(0px)",
              opacity: animationPhase === "splash" ? 0.5 : 1,
              transition: "all 0.3s ease-out 0.2s",
            }}
          >
            Hephzibah Oloyede
          </p>
        </article>
      </div>

      {/* Liquid morphing drops */}
      {isHovered &&
        liquidDrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${drop.x}px`,
              top: `${drop.y}px`,
              width: `${drop.size}px`,
              height: `${drop.size}px`,
              background:
                "radial-gradient(circle, rgba(156, 163, 175, 0.8) 0%, rgba(107, 114, 128, 0.4) 70%, transparent 100%)",
              transform: `
              translateY(${
                animationPhase === "liquify"
                  ? "0px"
                  : animationPhase === "splash"
                    ? `${Math.random() * 200 + 100}px`
                    : animationPhase === "reform"
                      ? "-20px"
                      : "0px"
              }) 
              scale(${
                animationPhase === "liquify"
                  ? "1"
                  : animationPhase === "splash"
                    ? "0.3"
                    : animationPhase === "reform"
                      ? "1.5"
                      : "0"
              })
            `,
              opacity: animationPhase === "idle" ? 0 : 0.7,
              transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${drop.delay}s`,
              zIndex: 15,
              filter: "blur(0.5px)",
            }}
          />
        ))}

      {/* Ripple effect */}
      {animationPhase === "splash" && (
        <div
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(156, 163, 175, 0.1) 50%, transparent 100%)",
            transform: "scale(2)",
            opacity: 0.5,
            animation: "ripple 0.8s ease-out",
          }}
        />
      )}

      {/* CSS Keyframes injection */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default PictureCard;
