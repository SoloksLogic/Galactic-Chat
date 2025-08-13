export default function AnimatedBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star-2"></div>
        <div className="shooting-star-3"></div>
        <div className="shooting-star-4"></div>
        <div className="shooting-star-5"></div>
        <div className="pulsing-stars"></div>
        <div className="moving-stars-fast"></div>
        <div className="moving-stars-slow"></div>
        <div className="nebula-1"></div>
        <div className="nebula-2"></div>
        <div className="rotating-galaxy"></div>
        <div className="rotating-galaxy-2"></div>
        <div className="orbital-particles"></div>
        <div className="floating-particles"></div>
        <div className="comet-trail"></div>
        <div className="aurora-effect"></div>
      </div>
      <style jsx global>{`
        .galactic-title {
          animation: title-float 6s ease-in-out infinite alternate, title-glow 3s ease-in-out infinite alternate;
        }
        
        .galactic-subtitle {
          animation: subtitle-float 5s ease-in-out infinite alternate 1s, subtitle-pulse 4s ease-in-out infinite;
        }
        
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 
            100px 200px white,
            300px 100px white,
            500px 300px white,
            700px 150px white,
            900px 250px white,
            200px 400px white,
            400px 500px white,
            600px 200px white,
            800px 400px white,
            1000px 300px white,
            150px 600px white,
            350px 700px white,
            550px 450px white,
            750px 650px white,
            950px 550px white,
            50px 150px white,
            250px 50px white,
            450px 350px white,
            650px 100px white,
            850px 200px white;
          animation: move-stars 150s linear infinite;
        }
        
        .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;
          background: white;
          border-radius: 50%;
          box-shadow: 
            180px 180px rgba(255,255,255,0.9),
            380px 280px rgba(255,255,255,0.7),
            580px 80px rgba(255,255,255,0.8),
            780px 380px rgba(255,255,255,0.6),
            980px 180px rgba(255,255,255,0.9),
            1180px 480px rgba(255,255,255,0.5),
            1380px 80px rgba(255,255,255,0.8),
            220px 520px rgba(255,255,255,0.7),
            420px 20px rgba(255,255,255,0.9),
            620px 420px rgba(255,255,255,0.6),
            820px 120px rgba(255,255,255,0.8),
            1020px 520px rgba(255,255,255,0.5),
            1220px 220px rgba(255,255,255,0.7),
            1420px 420px rgba(255,255,255,0.9);
          animation: move-twinkling 200s linear infinite, twinkle 3s ease-in-out infinite alternate;
        }
        
        .moving-stars-fast {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          box-shadow: 
            90px 150px rgba(255,255,255,0.8),
            290px 350px rgba(255,255,255,0.6),
            490px 250px rgba(255,255,255,0.9),
            690px 50px rgba(255,255,255,0.7),
            890px 450px rgba(255,255,255,0.5),
            1090px 150px rgba(255,255,255,0.8),
            1290px 350px rgba(255,255,255,0.6),
            1490px 250px rgba(255,255,255,0.9),
            190px 550px rgba(255,255,255,0.7),
            390px 80px rgba(255,255,255,0.5),
            590px 380px rgba(255,255,255,0.8),
            790px 180px rgba(255,255,255,0.6);
          animation: move-stars-fast 80s linear infinite, pulse-fast 2s ease-in-out infinite alternate;
        }
        
        .moving-stars-slow {
          position: absolute;
          top: 0;
          left: 0;
          width: 1.5px;
          height: 1.5px;
          background: rgba(200,200,255,0.6);
          border-radius: 50%;
          box-shadow: 
            120px 180px rgba(200,200,255,0.6),
            320px 80px rgba(200,200,255,0.4),
            520px 380px rgba(200,200,255,0.7),
            720px 280px rgba(200,200,255,0.5),
            920px 480px rgba(200,200,255,0.3),
            1120px 80px rgba(200,200,255,0.6),
            1320px 380px rgba(200,200,255,0.4),
            1520px 280px rgba(200,200,255,0.7),
            220px 580px rgba(200,200,255,0.5),
            420px 180px rgba(200,200,255,0.3);
          animation: move-stars-slow 400s linear infinite, glow 5s ease-in-out infinite alternate;
        }
        
        .pulsing-stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 3px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          box-shadow: 
            200px 300px rgba(255,255,255,0.9),
            600px 100px rgba(255,255,255,0.9),
            1000px 500px rgba(255,255,255,0.9),
            1400px 200px rgba(255,255,255,0.9),
            300px 600px rgba(255,255,255,0.9),
            700px 400px rgba(255,255,255,0.9),
            1100px 100px rgba(255,255,255,0.9),
            1500px 600px rgba(255,255,255,0.9);
          animation: pulse-bright 4s ease-in-out infinite alternate, rotate 600s linear infinite;
        }
        
        .shooting-star {
          position: absolute;
          top: 5%;
          left: -10%;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 
            0 0 10px white, 
            0 0 20px white, 
            0 0 30px white,
            -150px 0 120px 6px rgba(255,255,255,0.1);
          animation: shooting-1 15s ease-out infinite;
        }
        
        .shooting-star-2 {
          position: absolute;
          top: 30%;
          left: -10%;
          width: 3px;
          height: 3px;
          background: rgba(255,200,255,1);
          border-radius: 50%;
          box-shadow: 
            0 0 8px rgba(255,200,255,1), 
            0 0 16px rgba(255,200,255,0.8), 
            0 0 24px rgba(255,200,255,0.6),
            -120px 0 100px 4px rgba(255,200,255,0.1);
          animation: shooting-2 18s ease-out infinite 5s;
        }
        
        .shooting-star-3 {
          position: absolute;
          top: 70%;
          left: -10%;
          width: 2px;
          height: 2px;
          background: rgba(200,255,255,1);
          border-radius: 50%;
          box-shadow: 
            0 0 6px rgba(200,255,255,1), 
            0 0 12px rgba(200,255,255,0.8), 
            0 0 18px rgba(200,255,255,0.6),
            -100px 0 80px 3px rgba(200,255,255,0.1);
          animation: shooting-3 12s ease-out infinite 8s;
        }
        
        .shooting-star-4 {
          position: absolute;
          top: 15%;
          left: -10%;
          width: 5px;
          height: 5px;
          background: rgba(255,255,100,1);
          border-radius: 50%;
          box-shadow: 
            0 0 12px rgba(255,255,100,1), 
            0 0 24px rgba(255,255,100,0.8), 
            0 0 36px rgba(255,255,100,0.6),
            -180px 0 140px 8px rgba(255,255,100,0.1);
          animation: shooting-4 20s ease-out infinite 3s;
        }
        
        .shooting-star-5 {
          position: absolute;
          top: 50%;
          left: -10%;
          width: 3px;
          height: 3px;
          background: rgba(255,150,255,1);
          border-radius: 50%;
          box-shadow: 
            0 0 9px rgba(255,150,255,1), 
            0 0 18px rgba(255,150,255,0.8), 
            0 0 27px rgba(255,150,255,0.6),
            -130px 0 110px 5px rgba(255,150,255,0.1);
          animation: shooting-5 14s ease-out infinite 7s;
        }
        
        .nebula-1 {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(128,0,128,0.3) 0%, rgba(255,0,255,0.1) 50%, transparent 100%);
          border-radius: 50%;
          animation: nebula-drift-1 120s linear infinite, nebula-pulse 8s ease-in-out infinite alternate;
        }
        
        .nebula-2 {
          position: absolute;
          bottom: 20%;
          left: 5%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(0,128,255,0.25) 0%, rgba(0,255,255,0.08) 50%, transparent 100%);
          border-radius: 50%;
          animation: nebula-drift-2 180s linear infinite, nebula-pulse 10s ease-in-out infinite alternate 3s;
        }
        
        .rotating-galaxy {
          position: absolute;
          top: 20%;
          left: 70%;
          width: 200px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 30%, transparent 70%);
          border-radius: 50%;
          animation: galaxy-rotate 300s linear infinite, galaxy-pulse 15s ease-in-out infinite alternate;
        }
        
        .rotating-galaxy-2 {
          position: absolute;
          bottom: 30%;
          right: 20%;
          width: 150px;
          height: 150px;
          background: radial-gradient(ellipse, rgba(255,200,255,0.08) 0%, rgba(255,200,255,0.03) 30%, transparent 70%);
          border-radius: 50%;
          animation: galaxy-rotate-reverse 400s linear infinite, galaxy-pulse 12s ease-in-out infinite alternate 5s;
        }
        
        .orbital-particles {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 800px;
          height: 800px;
          margin: -400px 0 0 -400px;
          border: 1px solid rgba(255,255,255,0.02);
          border-radius: 50%;
          animation: orbital-rotation 240s linear infinite;
        }
        
        .orbital-particles::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 3px;
          height: 3px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          margin-left: -1.5px;
          box-shadow: 0 0 6px rgba(255,255,255,0.8);
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 100px 150px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 300px 50px, rgba(255,200,255,0.3), transparent),
            radial-gradient(1px 1px at 500px 250px, rgba(200,255,255,0.3), transparent),
            radial-gradient(1px 1px at 700px 350px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 200px 450px, rgba(255,200,255,0.3), transparent);
          animation: particle-float 60s ease-in-out infinite;
        }
        
        .comet-trail {
          position: absolute;
          top: 25%;
          left: -20%;
          width: 600px;
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 100%);
          transform: rotate(25deg);
          animation: comet-sweep 25s ease-in-out infinite;
        }
        
        .aurora-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(0,255,150,0.03) 25%,
            transparent 50%,
            rgba(255,0,150,0.03) 75%,
            transparent 100%
          );
          animation: aurora-wave 40s ease-in-out infinite;
        }
        
        @keyframes title-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes title-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
            text-shadow: 0 0 30px rgba(255,0,255,0.7);
          }
          50% { 
            filter: drop-shadow(0 0 40px rgba(255,255,255,0.8));
            text-shadow: 0 0 50px rgba(255,0,255,1);
          }
        }
        
        @keyframes subtitle-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }
        
        @keyframes subtitle-pulse {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(0,255,255,0.6);
          }
          50% { 
            text-shadow: 0 0 40px rgba(0,255,255,0.9);
          }
        }
        
        @keyframes animate-gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes animate-gradient-y {
          0%, 100% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
        }
        
        @keyframes move-stars {
          from { transform: translateX(0px) translateY(0px); }
          to { transform: translateX(-300px) translateY(-50px); }
        }
        
        @keyframes move-stars-fast {
          from { transform: translateX(0px) translateY(0px); }
          to { transform: translateX(-500px) translateY(-100px); }
        }
        
        @keyframes move-stars-slow {
          from { transform: translateX(0px) translateY(0px); }
          to { transform: translateX(-200px) translateY(50px); }
        }
        
        @keyframes move-twinkling {
          from { transform: translateX(0px) translateY(0px); }
          to { transform: translateX(-400px) translateY(-75px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-bright {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            opacity: 0.3;
            filter: blur(0px);
          }
          50% { 
            opacity: 0.8;
            filter: blur(1px);
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shooting-1 {
          0% { 
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          70% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(600px) translateY(600px) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes shooting-2 {
          0% { 
            transform: translateX(0) translateY(0) rotate(35deg);
            opacity: 1;
          }
          75% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(700px) translateY(400px) rotate(35deg);
            opacity: 0;
          }
        }
        
        @keyframes shooting-3 {
          0% { 
            transform: translateX(0) translateY(0) rotate(55deg);
            opacity: 1;
          }
          80% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(500px) translateY(300px) rotate(55deg);
            opacity: 0;
          }
        }
        
        @keyframes shooting-4 {
          0% { 
            transform: translateX(0) translateY(0) rotate(25deg);
            opacity: 1;
          }
          85% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(800px) translateY(500px) rotate(25deg);
            opacity: 0;
          }
        }
        
        @keyframes shooting-5 {
          0% { 
            transform: translateX(0) translateY(0) rotate(65deg);
            opacity: 1;
          }
          75% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(650px) translateY(350px) rotate(65deg);
            opacity: 0;
          }
        }
        
        @keyframes nebula-drift-1 {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(-100px) translateY(50px) rotate(360deg); }
        }
        
        @keyframes nebula-drift-2 {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(80px) translateY(-30px) rotate(-360deg); }
        }
        
        @keyframes nebula-pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        
        @keyframes galaxy-rotate {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.1); }
        }
        
        @keyframes galaxy-rotate-reverse {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(-360deg) scale(0.9); }
        }
        
        @keyframes galaxy-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes orbital-rotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-20px);
            opacity: 0.8;
          }
        }
        
        @keyframes comet-sweep {
          0% { 
            transform: translateX(-200px) translateY(0) rotate(25deg);
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(1200px) translateY(-100px) rotate(25deg);
            opacity: 0;
          }
        }
        
        @keyframes aurora-wave {
          0%, 100% { 
            transform: translateX(-100px) skewX(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateX(100px) skewX(5deg);
            opacity: 0.8;
          }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
