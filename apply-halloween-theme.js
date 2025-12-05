const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// HTML files to update
const htmlFiles = [
    'index.html',
    'index-new.html',
    'dashboard.html',
    'api-dashboard.html',
    'api-dashboard-new.html',
    'diagnostic.html',
    'diagnostic-new.html',
    'sop-view.html',
    'test.html',
    'test-new.html',
    'test-speech.html'
];

// Function to update HTML file with Halloween theme
function applyHalloweenTheme(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  Skipping ${path.basename(filePath)} - file not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if already has Halloween theme
    if (content.includes('halloween-theme.css')) {
        console.log(`✅ ${path.basename(filePath)} - already has Halloween theme`);
        return;
    }

    // Add Halloween theme CSS link after the title tag
    content = content.replace(
        /(<title>.*?<\/title>)/,
        '$1\n    <link rel="stylesheet" href="/halloween-theme.css">'
    );

    // Update logo text to MarketHero with bat icon
    content = content.replace(
        /<div class="logo">.*?<\/div>/g,
        '<div class="logo"><img src="/markethero-icon.svg" alt="MarketHero" class="logo-icon" />MarketHero</div>'
    );

    // Update page titles
    content = content.replace(
        /<title>AI Voice SOP Agent<\/title>/g,
        '<title>🦇 MarketHero - Spooky SOP Generator 🎃</title>'
    );
    content = content.replace(
        /<title>System Dashboard<\/title>/g,
        '<title>🦇 MarketHero - System Dashboard 🎃</title>'
    );
    content = content.replace(
        /<title>API Monitoring Dashboard<\/title>/g,
        '<title>🦇 MarketHero - API Monitoring 🎃</title>'
    );
    content = content.replace(
        /<title>SOP Document<\/title>/g,
        '<title>🦇 MarketHero - SOP Document 🎃</title>'
    );
    content = content.replace(
        /<title>API Test<\/title>/g,
        '<title>🦇 MarketHero - API Test 🎃</title>'
    );
    content = content.replace(
        /<title>Diagnostic Dashboard<\/title>/g,
        '<title>🦇 MarketHero - Diagnostics 🎃</title>'
    );
    content = content.replace(
        /<title>Speech Test<\/title>/g,
        '<title>🦇 MarketHero - Speech Test 🎃</title>'
    );

    // Update welcome messages
    content = content.replace(
        /<h1>Create SOPs with AI<\/h1>/g,
        '<h1>🎃 Conjure SOPs with Dark AI Magic 🦇</h1>'
    );
    content = content.replace(
        /<p>Describe your workflow or process.*?<\/p>/g,
        '<p>Whisper your workflow into the darkness, and watch as MarketHero summons a terrifyingly comprehensive SOP...</p>'
    );

    // Update emoji icons to spooky ones
    content = content.replace(/🎙️/g, '🦇');
    content = content.replace(/📈/g, '🕷️');
    content = content.replace(/🔍/g, '👁️');
    content = content.replace(/🏠/g, '🏚️');
    content = content.replace(/📋/g, '📜');
    content = content.replace(/📄/g, '📜');
    content = content.replace(/📝/g, '🕸️');
    content = content.replace(/👤/g, '👻');
    content = content.replace(/🤖/g, '🧛');
    content = content.replace(/✅/g, '💀');
    content = content.replace(/❌/g, '☠️');
    content = content.replace(/⚠️/g, '⚰️');
    content = content.replace(/📊/g, '🔮');
    content = content.replace(/📥/g, '🕯️');
    content = content.replace(/📤/g, '🦴');
    content = content.replace(/❓/g, '🕷️');
    content = content.replace(/⏳/g, '⏳');
    content = content.replace(/ℹ️/g, '🎃');
    content = content.replace(/💬/g, '🦇');
    content = content.replace(/🔔/g, '🔔');
    content = content.replace(/⚙️/g, '⚙️');

    // Write updated content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`🎃 ${path.basename(filePath)} - Halloween theme applied!`);
}

// Apply theme to all HTML files
console.log('🦇 Applying Halloween Theme to MarketHero... 🎃\n');

htmlFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    applyHalloweenTheme(filePath);
});

console.log('\n🎃 Halloween transformation complete! MarketHero is now spooky! 🦇');
