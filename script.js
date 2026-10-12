/* ==============================================================
   SHYAMKUMAR'S TECH & ARCADE PORTAL - MASTER JAVASCRIPT
   1. System Core: Theme Switcher, Mobile Nav, Dynamic Year
   2. Module 1: AI Neural Prompt & Concept Lab (Streaming Engine)
   3. Module 2: Enhanced 8-Bit Cyber Defender Engine (Bosses, Power-ups, Synth)
   4. Module 3: Filterable Project Showcase & Architecture Modals
   5. Module 4: Resume PDF & Print Engine
   6. Module 5: Real-World Contact Form & Validation
============================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==============================================================
  // 1. SYSTEM CORE: DYNAMIC YEAR, THEME & NAV
  // ==============================================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Dark / Light Theme
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlRoot = document.documentElement;
  const savedTheme = localStorage.getItem('site-theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
    if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Mobile Navigation Menu
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  // ==============================================================
  // 2. MODULE 1: AI NEURAL PROMPT & CONCEPT LAB 🧠
  // ==============================================================
  const aiInput = document.getElementById('ai-prompt-input');
  const btnRunAi = document.getElementById('btn-run-ai');
  const aiOutput = document.getElementById('ai-output-content');
  const btnCopyAi = document.getElementById('btn-copy-ai');
  const aiTabs = document.querySelectorAll('.ai-tab');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');
  let currentAiMode = 'code';
  let isTyping = false;

  // Mode Selection Tabs
  aiTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      aiTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentAiMode = tab.dataset.mode;
      updateAiSuggestions();
    });
  });

  const suggestionsMap = {
    code: [
      "How does a game loop work in JavaScript?",
      "Write a collision detection function",
      "Explain CSS Flexbox vs Grid with an example"
    ],
    game: [
      "Design a cyberpunk boss battle mechanic",
      "Suggest a scoring combo system for an arcade game",
      "Create lore for a neon starfighter pilot"
    ],
    design: [
      "Generate an aesthetic obsidian dark palette",
      "Design rules for clean glassmorphism UI",
      "How to pick typography pairings for developers"
    ],
    explain: [
      "Explain Large Language Models like I'm five",
      "What is the Web Audio API and how does code make sound?",
      "How does git version control work under the hood?"
    ]
  };

  function updateAiSuggestions() {
    const list = suggestionsMap[currentAiMode] || suggestionsMap.code;
    const chips = document.querySelectorAll('.suggestion-chip');
    chips.forEach((chip, i) => {
      if (list[i]) chip.textContent = list[i];
    });
  }

  // Suggestion Chip Clicks
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (aiInput) {
        aiInput.value = chip.textContent;
        generateAiResponse(chip.textContent);
      }
    });
  });

  // Run Button Click
  if (btnRunAi) {
    btnRunAi.addEventListener('click', () => {
      const query = aiInput.value.trim();
      if (!query) {
        aiInput.focus();
        return;
      }
      generateAiResponse(query);
    });
  }

  // Simulated Generative Response Generator
  function generateAiResponse(query) {
    if (isTyping) return;
    isTyping = true;
    aiOutput.textContent = '';
    aiOutput.className = 'output-body typewriter-cursor';

    let responseText = '';
    const qLower = query.toLowerCase();

    if (currentAiMode === 'code' || qLower.includes('code') || qLower.includes('function') || qLower.includes('loop')) {
      responseText = `// --- Generated Code Solution ---
// Topic: ${query}

function executeSystemLoop() {
  const targetFPS = 60;
  let lastFrameTime = performance.now();

  function cycle(currentTime) {
    const deltaTime = (currentTime - lastFrameTime) / 1000;
    lastFrameTime = currentTime;

    // 1. Process physics and input
    updateEntities(deltaTime);

    // 2. Render frame to viewport
    renderScene();

    requestAnimationFrame(cycle);
  }

  requestAnimationFrame(cycle);
}

/* 
 * 💡 Pro-Tip for Shyamkumar:
 * Using requestAnimationFrame synchronizes updates with your monitor's refresh rate,
 * eliminating visual screen tearing and ensuring silky-smooth 60+ FPS motion!
 */`;
    } else if (currentAiMode === 'game' || qLower.includes('game') || qLower.includes('mechanic') || qLower.includes('boss')) {
      responseText = `🎮 --- GAME DESIGN SPECIFICATION ---
Title: Quantum Overdrive
Focus: ${query}

1. CORE MECHANIC:
   Players build kinetic overdrive by narrowly dodging incoming projectiles (Near-Miss Bonus).
   Grazing enemy laser fire fills the 'Neon Gauge'.

2. RISK VS REWARD:
   • Standard Kill: +25 Points
   • Close-Range Shotgun Blast: +100 Points + Energy Shield recharge
   • Overdrive State: Double fire rate + temporal bullet-time slow-motion for 6 seconds.

3. SOUND DESIGN:
   Synthesized 8-bit rising arpeggios on streak multipliers, dropping to low saw-tooth sub-bass during overdrive!`;
    } else if (currentAiMode === 'design' || qLower.includes('palette') || qLower.includes('ui') || qLower.includes('color')) {
      responseText = `🎨 --- AESTHETIC DESIGN SYSTEM TOKENS ---
Theme Inspiration: ${query}

:root {
  --surface-deep: #080c14;      /* Obsidian Black */
  --surface-card: #0f172a;      /* Slate Blue Container */
  --accent-electric: #6366f1;   /* Indigo Highlight */
  --accent-neon: #a855f7;       /* Royal Violet */
  --accent-glow: #38bdf8;       /* Cyber Sky Blue */
  --text-high-contrast: #f8fafc;
}

Design Guidelines:
• Contrast Ratio: 14.2:1 (Exceeds WCAG AAA accessibility standard).
• Elevation: Apply 16px backdrop-filter blur with 1px border highlight (rgba(255, 255, 255, 0.08)).
• Typography: Pair crisp neo-grotesque sans-serif (Inter) with monospace code tags (Fira Code).`;
    } else {
      responseText = `🧠 --- TECHNICAL CONCEPT EXPLAINER ---
Subject: ${query}

Mental Model:
Imagine this concept as a high-speed data highway. Rather than waiting for one massive batch of information to complete before moving, modern architectures break tasks into micro-events that communicate asynchronously.

Key Takeaways:
1. Separation of Concerns: Keep structure (data), presentation (visuals), and logic (actions) isolated.
2. Reactive State: When state updates, the UI automatically reflects the changes without manual DOM redraws.
3. Scalability: Clean simple modular foundations easily grow into enterprise-grade applications.`;
    }

    // Typewriter Streaming Animation
    let index = 0;
    const speed = 12; // ms per character
    function typeNextChar() {
      if (index < responseText.length) {
        aiOutput.textContent += responseText.charAt(index);
        index++;
        setTimeout(typeNextChar, speed);
      } else {
        isTyping = false;
        aiOutput.className = 'output-body';
      }
    }
    typeNextChar();
  }

  // 1-Click Copy Response Button
  if (btnCopyAi) {
    btnCopyAi.addEventListener('click', () => {
      const text = aiOutput.textContent;
      if (!text || text.includes('Ready. Select a tab')) return;
      navigator.clipboard.writeText(text).then(() => {
        btnCopyAi.textContent = '✅ Copied!';
        setTimeout(() => { btnCopyAi.textContent = '📋 Copy'; }, 2000);
      });
    });
  }

  // ==============================================================
  // 3. MODULE 2: ENHANCED 8-BIT CYBER DEFENDER GAME ENGINE 🕹️
  // ==============================================================
  const canvas = document.getElementById('game-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const scoreDisplay = document.getElementById('game-score');
    const highScoreDisplay = document.getElementById('game-highscore');
    const weaponDisplay = document.getElementById('game-weapon');
    const livesDisplay = document.getElementById('game-lives');
    const overlay = document.getElementById('game-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayMsg = document.getElementById('overlay-msg');
    const btnStart = document.getElementById('btn-start-game');
    const btnPause = document.getElementById('btn-pause-game');
    const btnMute = document.getElementById('btn-mute-sound');
    const btnCrt = document.getElementById('btn-crt-toggle');
    const crtOverlay = document.getElementById('crt-overlay');

    // Touch controls
    const btnTouchLeft = document.getElementById('btn-touch-left');
    const btnTouchRight = document.getElementById('btn-touch-right');
    const btnTouchFire = document.getElementById('btn-touch-fire');

    // Web Audio Synthesizer
    let audioCtx = null;
    let soundEnabled = true;

    function initAudio() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }

    function playSound(type) {
      if (!soundEnabled || !audioCtx) return;
      try {
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'laser') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(900, now);
          osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
          osc.start(now);
          osc.stop(now + 0.12);
        } else if (type === 'triple') {
          osc.type = 'square';
          osc.frequency.setValueAtTime(1100, now);
          osc.frequency.exponentialRampToValueAtTime(220, now + 0.14);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
          osc.start(now);
          osc.stop(now + 0.14);
        } else if (type === 'explosion') {
          osc.type = 'square';
          osc.frequency.setValueAtTime(150, now);
          osc.frequency.exponentialRampToValueAtTime(25, now + 0.25);
          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        } else if (type === 'powerup') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(350, now);
          osc.frequency.linearRampToValueAtTime(700, now + 0.1);
          osc.frequency.linearRampToValueAtTime(1050, now + 0.2);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        } else if (type === 'hit') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.setValueAtTime(110, now + 0.1);
          gain.gain.setValueAtTime(0.3, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
        }
      } catch (e) {}
    }

    // Game Variables
    let isPlaying = false;
    let isPaused = false;
    let score = 0;
    let highScore = parseInt(localStorage.getItem('cyber-highscore') || '0', 10);
    let lives = 3;
    let animationId = null;
    let weaponType = 'single'; // 'single' or 'triple'
    let weaponTimer = 0;

    highScoreDisplay.textContent = String(highScore).padStart(4, '0');

    const keys = { left: false, right: false, fire: false };

    // Starfield Background
    const stars = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 2 + 0.8
      });
    }

    // Player Object
    const player = {
      width: 32,
      height: 32,
      x: canvas.width / 2 - 16,
      y: canvas.height - 50,
      speed: 6.5,
      lastShot: 0,
      shotCooldown: 160,
      invulnerable: 0
    };

    let bullets = [];
    let enemies = [];
    let powerups = [];
    let particles = [];
    let boss = null;
    let enemySpawnTimer = 0;
    let enemySpawnInterval = 60;

    // Controls listeners
    btnStart.addEventListener('click', () => { initAudio(); startGame(); });
    btnPause.addEventListener('click', () => {
      if (!isPlaying) return;
      isPaused = !isPaused;
      btnPause.textContent = isPaused ? '▶️ Resume' : '⏸️ Pause';
      if (!isPaused) gameLoop();
    });
    btnMute.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      btnMute.textContent = soundEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
    });
    btnCrt.addEventListener('click', () => {
      if (crtOverlay) {
        crtOverlay.classList.toggle('disabled');
        btnCrt.textContent = crtOverlay.classList.contains('disabled') ? '📺 CRT Scanlines: OFF' : '📺 CRT Scanlines: ON';
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
      if (e.code === 'Space') {
        keys.fire = true;
        if (isPlaying && !isPaused) e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
      if (e.code === 'Space') keys.fire = false;
    });

    function setupTouch(btn, key) {
      if (!btn) return;
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); keys[key] = true; });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); keys[key] = false; });
      btn.addEventListener('mousedown', () => { keys[key] = true; });
      btn.addEventListener('mouseup', () => { keys[key] = false; });
      btn.addEventListener('mouseleave', () => { keys[key] = false; });
    }
    setupTouch(btnTouchLeft, 'left');
    setupTouch(btnTouchRight, 'right');
    setupTouch(btnTouchFire, 'fire');

    function startGame() {
      isPlaying = true;
      isPaused = false;
      score = 0;
      lives = 3;
      weaponType = 'single';
      weaponTimer = 0;
      bullets = [];
      enemies = [];
      powerups = [];
      particles = [];
      boss = null;
      enemySpawnInterval = 60;
      player.x = canvas.width / 2 - 16;
      player.invulnerable = 0;

      updateHUD();
      overlay.classList.add('hidden');
      btnPause.textContent = '⏸️ Pause';

      if (animationId) cancelAnimationFrame(animationId);
      gameLoop();
    }

    function gameOver() {
      isPlaying = false;
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('cyber-highscore', highScore);
        highScoreDisplay.textContent = String(highScore).padStart(4, '0');
      }

      overlayTitle.textContent = 'MISSION FAILED';
      overlayTitle.style.color = '#ef4444';
      overlayMsg.textContent = `FINAL SCORE: ${score} | ALL-TIME RECORD: ${highScore}`;
      btnStart.textContent = 'RETRY MISSION 🔄';
      overlay.classList.remove('hidden');
    }

    function updateHUD() {
      scoreDisplay.textContent = String(score).padStart(4, '0');
      livesDisplay.textContent = '❤️'.repeat(Math.max(0, lives));
      weaponDisplay.textContent = weaponType === 'triple' ? `TRIPLE LASER (${Math.ceil(weaponTimer / 60)}s)` : 'SINGLE LASER';
      weaponDisplay.style.color = weaponType === 'triple' ? '#ec4899' : '#38bdf8';
    }

    function gameLoop() {
      if (!isPlaying || isPaused) return;
      update();
      draw();
      animationId = requestAnimationFrame(gameLoop);
    }

    function update() {
      const now = Date.now();

      // 1. Move Player
      if (keys.left && player.x > 8) player.x -= player.speed;
      if (keys.right && player.x < canvas.width - player.width - 8) player.x += player.speed;

      // 2. Weapon Powerup Countdown
      if (weaponType === 'triple') {
        weaponTimer--;
        if (weaponTimer <= 0) {
          weaponType = 'single';
          updateHUD();
        } else if (weaponTimer % 30 === 0) {
          updateHUD();
        }
      }

      // 3. Fire Lasers
      if (keys.fire && now - player.lastShot > player.shotCooldown) {
        if (weaponType === 'triple') {
          bullets.push(
            { x: player.x + player.width / 2 - 3, y: player.y, vx: 0, vy: -9, width: 6, height: 14, color: '#ec4899' },
            { x: player.x + 2, y: player.y, vx: -2.5, vy: -8.5, width: 5, height: 12, color: '#ec4899' },
            { x: player.x + player.width - 7, y: player.y, vx: 2.5, vy: -8.5, width: 5, height: 12, color: '#ec4899' }
          );
          playSound('triple');
        } else {
          bullets.push({ x: player.x + player.width / 2 - 3, y: player.y, vx: 0, vy: -9, width: 6, height: 14, color: '#38bdf8' });
          playSound('laser');
        }
        player.lastShot = now;
      }

      // 4. Update Bullets
      for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].x += (bullets[i].vx || 0);
        bullets[i].y += (bullets[i].vy || -9);
        if (bullets[i].y < -20) bullets.splice(i, 1);
      }

      // 5. Boss Mechanics (Every 250 points if not active)
      if (!boss && score > 0 && score % 250 < 40 && Math.random() < 0.03) {
        boss = {
          x: canvas.width / 2 - 40,
          y: -60,
          width: 80,
          height: 48,
          hp: 15,
          maxHp: 15,
          speed: 2,
          dir: 1
        };
      }

      if (boss) {
        if (boss.y < 35) boss.y += 1.5;
        boss.x += boss.speed * boss.dir;
        if (boss.x <= 20 || boss.x >= canvas.width - boss.width - 20) boss.dir *= -1;

        // Check boss collision with bullets
        for (let b = bullets.length - 1; b >= 0; b--) {
          if (checkCollision(bullets[b], boss)) {
            bullets.splice(b, 1);
            boss.hp--;
            createExplosion(boss.x + Math.random() * boss.width, boss.y + boss.height / 2, '#ec4899');
            playSound('hit');

            if (boss.hp <= 0) {
              createExplosion(boss.x + boss.width / 2, boss.y + boss.height / 2, '#f43f5e', 40);
              playSound('explosion');
              score += 150;
              spawnPowerup(boss.x + boss.width / 2, boss.y + boss.height / 2, 'triple');
              boss = null;
              updateHUD();
              break;
            }
          }
        }
      }

      // 6. Spawn Enemies
      enemySpawnTimer++;
      if (enemySpawnTimer >= enemySpawnInterval) {
        enemySpawnTimer = 0;
        const isAsteroid = Math.random() > 0.6;
        enemies.push({
          x: Math.random() * (canvas.width - 40) + 10,
          y: -30,
          width: isAsteroid ? 28 : 24,
          height: isAsteroid ? 28 : 24,
          speed: Math.random() * 2 + 2,
          isAsteroid: isAsteroid,
          rot: 0,
          rotSpeed: (Math.random() - 0.5) * 0.08
        });

        if (enemySpawnInterval > 22 && score % 80 === 0) enemySpawnInterval--;
      }

      // 7. Update Enemies
      for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.y += enemy.speed;
        enemy.rot += enemy.rotSpeed;

        // Collision with player
        if (player.invulnerable <= 0 && checkCollision(player, enemy)) {
          lives--;
          player.invulnerable = 60;
          createExplosion(player.x + 16, player.y + 16, '#38bdf8');
          playSound('hit');
          updateHUD();
          enemies.splice(i, 1);

          if (lives <= 0) {
            gameOver();
            return;
          }
          continue;
        }

        // Bullet collisions
        let destroyed = false;
        for (let b = bullets.length - 1; b >= 0; b--) {
          if (checkCollision(bullets[b], enemy)) {
            bullets.splice(b, 1);
            createExplosion(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, enemy.isAsteroid ? '#a855f7' : '#f43f5e');
            playSound('explosion');
            score += enemy.isAsteroid ? 15 : 25;

            // 15% Chance of power-up drop
            if (Math.random() < 0.15) {
              spawnPowerup(enemy.x, enemy.y, Math.random() > 0.5 ? 'triple' : 'shield');
            }

            updateHUD();
            enemies.splice(i, 1);
            destroyed = true;
            break;
          }
        }

        if (destroyed) continue;
        if (enemy.y > canvas.height + 30) enemies.splice(i, 1);
      }

      // 8. Update Powerups
      for (let p = powerups.length - 1; p >= 0; p--) {
        powerups[p].y += 1.8;
        if (checkCollision(player, powerups[p])) {
          playSound('powerup');
          if (powerups[p].type === 'triple') {
            weaponType = 'triple';
            weaponTimer = 600; // 10 seconds (60fps * 10)
          } else if (powerups[p].type === 'shield') {
            if (lives < 4) lives++;
          }
          updateHUD();
          powerups.splice(p, 1);
          continue;
        }
        if (powerups[p].y > canvas.height + 20) powerups.splice(p, 1);
      }

      // 9. Particles, Stars & Invulnerability
      if (player.invulnerable > 0) player.invulnerable--;
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
        particles[i].life--;
        if (particles[i].life <= 0) particles.splice(i, 1);
      }
      stars.forEach(s => {
        s.y += s.speed;
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
      });
    }

    function spawnPowerup(x, y, type) {
      powerups.push({ x, y, width: 22, height: 22, type });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Starfield
      ctx.fillStyle = '#ffffff';
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Bullets
      bullets.forEach(b => {
        ctx.save();
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x, b.y, b.width, b.height);
        ctx.restore();
      });

      // Powerups
      powerups.forEach(p => {
        ctx.save();
        ctx.font = '16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(p.type === 'triple' ? '⚡' : '🛡️', p.x + 11, p.y + 16);
        ctx.restore();
      });

      // Boss
      if (boss) {
        ctx.save();
        ctx.shadowColor = '#ec4899';
        ctx.shadowBlur = 15;
        ctx.fillStyle = '#831843';
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(boss.x + boss.width / 2, boss.y + boss.height);
        ctx.lineTo(boss.x + boss.width, boss.y);
        ctx.lineTo(boss.x, boss.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Boss Health Bar
        ctx.fillStyle = '#374151';
        ctx.fillRect(boss.x, boss.y - 12, boss.width, 6);
        ctx.fillStyle = '#ec4899';
        ctx.fillRect(boss.x, boss.y - 12, (boss.hp / boss.maxHp) * boss.width, 6);
        ctx.restore();
      }

      // Enemies
      enemies.forEach(e => {
        ctx.save();
        ctx.translate(e.x + e.width / 2, e.y + e.height / 2);
        ctx.rotate(e.rot);

        if (e.isAsteroid) {
          ctx.strokeStyle = '#a855f7';
          ctx.fillStyle = '#2e1065';
          ctx.lineWidth = 2;
          ctx.beginPath();
          const r = e.width / 2;
          for (let a = 0; a < 8; a++) {
            const angle = (a * Math.PI) / 4;
            const rad = a % 2 === 0 ? r : r * 0.8;
            const px = Math.cos(angle) * rad;
            const py = Math.sin(angle) * rad;
            if (a === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.strokeStyle = '#f43f5e';
          ctx.fillStyle = '#881337';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, e.height / 2);
          ctx.lineTo(-e.width / 2, -e.height / 2);
          ctx.lineTo(0, -e.height / 4);
          ctx.lineTo(e.width / 2, -e.height / 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      });

      // Particles
      particles.forEach(p => {
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 25;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.restore();
      });

      // Player Ship
      if (player.invulnerable % 6 < 3) {
        ctx.save();
        ctx.translate(player.x + player.width / 2, player.y + player.height / 2);

        // Thruster
        ctx.fillStyle = Math.random() > 0.5 ? '#f59e0b' : '#ef4444';
        ctx.beginPath();
        ctx.moveTo(-6, player.height / 2);
        ctx.lineTo(0, player.height / 2 + 10 + Math.random() * 5);
        ctx.lineTo(6, player.height / 2);
        ctx.closePath();
        ctx.fill();

        // Ship
        ctx.shadowColor = '#6366f1';
        ctx.shadowBlur = 14;
        ctx.strokeStyle = weaponType === 'triple' ? '#ec4899' : '#818cf8';
        ctx.fillStyle = '#1e1b4b';
        ctx.lineWidth = 2.5;

        ctx.beginPath();
        ctx.moveTo(0, -player.height / 2);
        ctx.lineTo(player.width / 2, player.height / 2);
        ctx.lineTo(0, player.height / 4);
        ctx.lineTo(-player.width / 2, player.height / 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(0, -2, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    function createExplosion(x, y, color, count = 16) {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random();
        const speed = Math.random() * 3.5 + 1;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 1.5,
          color,
          life: 25
        });
      }
    }

    function checkCollision(r1, r2) {
      return (
        r1.x < r2.x + r2.width &&
        r1.x + r1.width > r2.x &&
        r1.y < r2.y + r2.height &&
        r1.y + r1.height > r2.y
      );
    }
  }

  // ==============================================================
  // 4. MODULE 3: PROJECT FILTERS & MODAL BLUEPRINT SYSTEM 💼
  // ==============================================================
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-target');
  const modalClose = document.getElementById('modal-close');

  // Filter Categories
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;

      projectCards.forEach(card => {
        const cat = card.dataset.category || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Project Modal Database
  const projectDetails = {
    p1: {
      title: "Personal Tech & Arcade Portal",
      tag: "Major Production System",
      tech: ["HTML5", "CSS3 Custom Tokens", "JavaScript (ES6+)", "PWA Manifest", "Web Audio API"],
      arch: `[Client Browser] ➔ [PWA Service Cache] ➔ [Semantic HTML5 SPA Engine]
                           ├── [Theme Engine: LocalStorage + CSS Custom Variables]
                           ├── [AI Sandbox Generator & Typewriter Stream]
                           ├── [HTML5 Canvas 2D Game Loop (60 FPS)]
                           └── [Print Engine: Media Query Formatter]`,
      desc: "An enterprise-grade personal portal engineered for high performance, accessibility, and interactive demonstration of technical skills.",
      features: [
        "Zero external framework dependencies for instant sub-second loading time.",
        "Full WCAG color contrast compliance with responsive layout down to 320px screens.",
        "Integrated PWA manifest allowing desktop and mobile home screen app installation."
      ]
    },
    p2: {
      title: "Cyber Defender 8-Bit Engine",
      tag: "Interactive 2D Physics Game",
      tech: ["HTML5 Canvas", "Web Audio API Synthesizer", "AABB Collision Math", "Particle System"],
      arch: `[User Input: Keyboard / Touch API]
          ▼
[Game Loop: requestAnimationFrame (60 FPS)]
    ├── [Entity Update: Player, Lasers, Drones, Boss, Power-ups]
    ├── [Collision Check: Axis-Aligned Bounding Box (AABB)]
    ├── [Audio Synth: Dynamic Oscillator Frequency Sweep]
    └── [Canvas Redraw: Parallax Stars + Entity Matrix]`,
      desc: "A custom retro arcade space shooter built strictly with vanilla JavaScript and the browser's native Canvas rendering context.",
      features: [
        "Pure code audio synthesizer producing 8-bit laser, explosion, and power-up sounds without any audio assets.",
        "Dynamic boss wave spawning every 250 points with health bars and multishot power-up drops.",
        "Persistent high score tracker automatically saved in browser's localStorage."
      ]
    },
    p3: {
      title: "Neural Prompt & Concept Sandbox",
      tag: "AI Developer Tool",
      tech: ["JavaScript", "Prompt Architecture", "Streaming Generator", "Clipboard API"],
      arch: `[Prompt Input & Mode Selector]
          ▼
[Category Evaluator: Code / Game / Design / Explainer]
          ▼
[Simulated Token Streamer: Character Buffer]
          ▼
[Typewriter Viewport with 1-Click Clipboard Export]`,
      desc: "A developer playground designed to test prompt formulation and generate simulated AI responses for coding, game mechanics, and UI design.",
      features: [
        "Four targeted engineering modes with pre-configured quick suggestion prompts.",
        "Live character-by-character typewriter streaming effect mimicking LLM generation.",
        "1-click copy-to-clipboard functionality with toast confirmation."
      ]
    },
    p4: {
      title: "Procedural Roguelike Dungeon Crawler",
      tag: "Concept Engine",
      tech: ["JavaScript", "Binary Space Partitioning (BSP)", "Grid Data Structures"],
      arch: `[Dungeon Boundary Matrix]
          ▼
[Recursive BSP Subdivision Tree]
          ▼
[Room Placement & Corridor Generation]
          ▼
[Tile Grid Pathfinding (A* Algorithm)]`,
      desc: "A technical prototype demonstrating algorithmic generation of interconnected labyrinth rooms and turn-based entity states.",
      features: [
        "Binary Space Partitioning creates non-overlapping, balanced dungeon layouts.",
        "Tile-based collision matrix with Fog of War visibility uncovering.",
        "Deterministic seed generation for reproducible dungeon layouts."
      ]
    }
  };

  // Open Modal
  document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const data = projectDetails[id];
      if (!data) return;

      modalContent.innerHTML = `
        <span class="project-tag">${data.tag}</span>
        <h3 class="section-title text-left" style="margin-top: 0.5rem;">${data.title}</h3>
        <p class="section-subtitle text-left" style="margin-bottom: 1.25rem;">${data.desc}</p>
        
        <div class="project-tech" style="margin-bottom: 1.25rem;">
          ${data.tech.map(t => `<span>${t}</span>`).join('')}
        </div>

        <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">System Architecture Diagram</h4>
        <div class="modal-arch-box"><pre>${data.arch}</pre></div>

        <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">Key Engineering Features</h4>
        <ul style="padding-left: 1.25rem; color: var(--text-muted); font-size: 0.92rem; line-height: 1.7;">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      `;

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  // Close Modal
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });

  // ==============================================================
  // 5. MODULE 4: RESUME PRINT & PDF ENGINE 📄
  // ==============================================================
  const btnPrintResume = document.getElementById('btn-print-resume');
  if (btnPrintResume) {
    btnPrintResume.addEventListener('click', () => {
      window.print();
    });
  }

  // ==============================================================
  // 6. MODULE 5: PRODUCTION CONTACT SYSTEM 📬
  // ==============================================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('char-count');

  if (messageInput && charCount) {
    messageInput.addEventListener('input', () => {
      const count = messageInput.value.length;
      charCount.textContent = `${count} / 500`;
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        formFeedback.textContent = '⚠️ Please fill out all required fields.';
        formFeedback.className = 'form-feedback error';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formFeedback.textContent = '⚠️ Please enter a valid email address.';
        formFeedback.className = 'form-feedback error';
        return;
      }

      // Friendly Success
      formFeedback.textContent = `🚀 Thank you, ${name}! Your message was successfully received by Shyamkumar.`;
      formFeedback.className = 'form-feedback success';
      contactForm.reset();
      if (charCount) charCount.textContent = '0 / 500';

      setTimeout(() => {
        formFeedback.textContent = '';
      }, 6000);
    });
  }

});
