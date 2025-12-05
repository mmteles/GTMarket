const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const htmlFiles = [
    'index.html',
    'index-new.html',
    'test.html',
    'test-new.html'
];

function updateToGTM(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  Skipping ${path.basename(filePath)} - file not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update titles
    content = content.replace(/Spooky SOP Generator/g, 'GTM Strategy Generator');
    content = content.replace(/SOP Document/g, 'GTM Strategy');
    
    // Update welcome messages
    content = content.replace(/Conjure SOPs with Dark AI Magic/g, 'Conjure GTM Strategies with Dark AI Magic');
    content = content.replace(/Whisper your workflow into the darkness.*?SOP\.\.\./g, 'Describe your product and market, and watch as MarketHero summons a terrifyingly effective Go-To-Market strategy...');
    content = content.replace(/Create SOPs with AI/g, 'Create GTM Strategies with AI');
    content = content.replace(/Describe your workflow or process.*?comprehensive.*?/g, 'Describe your product, market, and customers, and I\'ll help you create a comprehensive Go-To-Market strategy.');
    
    // Update button text
    content = content.replace(/Generate SOP/g, 'Generate GTM Plan');
    content = content.replace(/Generating SOP\.\.\./g, 'Generating GTM Plan...');
    content = content.replace(/Generated SOP/g, 'Generated GTM Strategy');
    
    // Update placeholders
    content = content.replace(/Describe your workflow or process\.\.\./g, 'Describe your product, target market, and customers...');
    content = content.replace(/workflow or process/g, 'product and market strategy');
    content = content.replace(/workflow/gi, 'Go-To-Market strategy');
    content = content.replace(/process/gi, 'market approach');
    
    // Update function names in comments and strings
    content = content.replace(/generateSOP/g, 'generateGTM');
    content = content.replace(/exportSOP/g, 'exportGTM');
    content = content.replace(/sopData/g, 'gtmData');
    content = content.replace(/sopId/g, 'gtmId');
    content = content.replace(/currentSOPData/g, 'currentGTMData');
    content = content.replace(/currentSOPId/g, 'currentGTMId');
    content = content.replace(/sopDocumentTitle/g, 'gtmDocumentTitle');
    content = content.replace(/sop-section/g, 'gtm-section');
    content = content.replace(/sop-card/g, 'gtm-card');
    content = content.replace(/sop-content/g, 'gtm-content');
    content = content.replace(/sop-view\.html/g, 'gtm-view.html');
    content = content.replace(/\/sops\//g, '/gtm/');
    
    // Update error messages
    content = content.replace(/Please have a conversation first before generating an SOP/g, 'Please have a conversation first before generating a GTM Plan');
    content = content.replace(/No SOP to export/g, 'No GTM Plan to export');
    content = content.replace(/Please generate an SOP first/g, 'Please generate a GTM Plan first');
    content = content.replace(/Failed to generate SOP/g, 'Failed to generate GTM Plan');
    content = content.replace(/SOP generation error/g, 'GTM generation error');
    content = content.replace(/SOP exported successfully/g, 'GTM Plan exported successfully');
    content = content.replace(/Failed to export SOP/g, 'Failed to export GTM Plan');
    
    // Update prompt text
    content = content.replace(/Enter the SOP document title/g, 'Enter the GTM Plan title');
    content = content.replace(/Standard Operating Procedure/g, 'Go-To-Market Strategy');
    
    // Update test messages
    content = content.replace(/creating an SOP for customer onboarding/g, 'creating a GTM strategy for a new SaaS product');
    
    // Update CSS class names
    content = content.replace(/\.sop-section/g, '.gtm-section');
    content = content.replace(/\.sop-card/g, '.gtm-card');
    content = content.replace(/\.sop-content/g, '.gtm-content');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${path.basename(filePath)} - Updated to GTM terminology`);
}

console.log('🚀 Updating MarketHero to GTM Strategy Generator...\n');

htmlFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    updateToGTM(filePath);
});

console.log('\n✅ GTM transformation complete! MarketHero is now a GTM Strategy Generator!');
