const fs = require('fs');
const path = require('path');

const mdFiles = [
    'README.md',
    'TESTING_GUIDE.md',
    'DEPLOYMENT.md',
    'HALLOWEEN_THEME.md',
    'HALLOWEEN_QUICK_START.md',
    'THEME_PREVIEW.md',
    'TRANSFORMATION_SUMMARY.md',
    'VISUAL_SHOWCASE.md',
    'AUTHENTICATION.md'
];

function updateDocToGTM(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  Skipping ${path.basename(filePath)} - file not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update SOP references
    content = content.replace(/SOP Generator/g, 'GTM Strategy Generator');
    content = content.replace(/SOP generation/g, 'GTM strategy generation');
    content = content.replace(/SOP Document/g, 'GTM Strategy Document');
    content = content.replace(/SOPs/g, 'GTM Strategies');
    content = content.replace(/SOP/g, 'GTM Strategy');
    content = content.replace(/Standard Operating Procedure/g, 'Go-To-Market Strategy');
    
    // Update workflow/process references
    content = content.replace(/workflows/g, 'market strategies');
    content = content.replace(/workflow/g, 'market strategy');
    content = content.replace(/processes/g, 'market approaches');
    content = content.replace(/process/g, 'market approach');
    content = content.replace(/procedures/g, 'strategies');
    content = content.replace(/procedure/g, 'strategy');
    
    // Update specific phrases
    content = content.replace(/document your workflows/g, 'create your GTM strategies');
    content = content.replace(/creating an SOP/g, 'creating a GTM strategy');
    content = content.replace(/Generate SOP/g, 'Generate GTM Plan');
    content = content.replace(/Conjure SOPs/g, 'Conjure GTM Strategies');
    content = content.replace(/comprehensive SOP/g, 'comprehensive GTM strategy');
    
    // Update file references
    content = content.replace(/sop-view\.html/g, 'gtm-view.html');
    content = content.replace(/\/api\/sop/g, '/api/gtm');
    content = content.replace(/SOP_MODEL/g, 'GTM_MODEL');
    
    // Update descriptions
    content = content.replace(/AI Voice SOP Agent/g, 'MarketHero GTM Strategy Generator');
    content = content.replace(/documenting Go To Market strategies/g, 'creating Go-To-Market strategies');
    content = content.replace(/comprehensive documentation/g, 'comprehensive GTM strategies');
    
    // Update taglines
    content = content.replace(/May your SOPs be spooky/g, 'May your GTM strategies be spooky');
    content = content.replace(/documentation be terrifyingly thorough/g, 'strategies be terrifyingly effective');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${path.basename(filePath)} - Updated to GTM terminology`);
}

console.log('📚 Updating documentation to GTM terminology...\n');

mdFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    updateDocToGTM(filePath);
});

console.log('\n✅ Documentation update complete!');
