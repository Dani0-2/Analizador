document.addEventListener('DOMContentLoaded', function() {
    const urlForm = document.getElementById('urlForm');
    const urlInput = document.getElementById('urlInput');
    const resultContainer = document.getElementById('resultContainer');
    const riskBar = document.getElementById('riskBar');
    const riskEmoji = document.getElementById('riskEmoji');
    const checkedUrl = document.getElementById('checkedUrl');
    const safetyStatus = document.getElementById('safetyStatus');
    const safetyDetails = document.getElementById('safetyDetails');

    urlForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const url = urlInput.value.trim();
        if (!url) return;

        // Simulate analysis (in a real app, this would call an API)
        analyzeUrl(url);
    });

    function analyzeUrl(url) {
        // Show loading state
        resultContainer.classList.remove('hidden');
        checkedUrl.textContent = url;
        safetyStatus.textContent = 'Analyzing...';
        safetyStatus.className = 'font-medium text-gray-600';
        safetyDetails.textContent = 'Please wait while we analyze the URL';
        riskBar.className = 'h-2.5 rounded-full bg-gray-400 animate-pulse w-full';
        riskEmoji.textContent = '🔍';

        // Simulate API delay
        setTimeout(() => {
            // Generate random risk level for demo (0-100)
            const riskLevel = Math.floor(Math.random() * 101);
            displayResults(riskLevel, url);
        }, 1500);
    }

    function displayResults(riskLevel, url) {
        let riskColor, statusText, detailsText, emoji;
        
        if (riskLevel <= 30) {
            riskColor = 'bg-green-500';
            statusText = 'Safe 🟢';
            detailsText = 'This URL appears to be safe with no known threats detected.';
            emoji = '✅';
        } else if (riskLevel <= 70) {
            riskColor = 'bg-yellow-500';
            statusText = 'Caution 🟡';
            detailsText = 'This URL may pose some risks. Proceed with caution.';
            emoji = '⚠️';
        } else {
            riskColor = 'bg-red-500';
            statusText = 'Dangerous 🔴';
            detailsText = 'This URL is potentially dangerous. We recommend not visiting it.';
            emoji = '❌';
        }

        // Update UI
        riskBar.className = `h-2.5 rounded-full ${riskColor} transition-all duration-500`;
        riskBar.style.width = `${riskLevel}%`;
        riskEmoji.textContent = emoji;
        safetyStatus.textContent = statusText;
        safetyStatus.className = `font-medium ${riskColor.replace('bg', 'text')}`;
        safetyDetails.textContent = detailsText;
        // Add safety tips based on risk level
        const tipsSection = document.getElementById('tipsSection');
        const safetyTips = document.getElementById('safetyTips');
        
        let tips = [];
        
        if (riskLevel <= 30) {
            tips = [
                "Aún así, verifica que la URL sea correcta antes de ingresar datos personales",
                "Revisa que el sitio use HTTPS para mayor seguridad",
                "Mantén tu navegador y antivirus actualizados"
            ];
        } else if (riskLevel <= 70) {
            tips = [
                "No ingreses contraseñas o información sensible en este sitio",
                "Considera usar una tarjeta de crédito virtual o servicio de pago temporal",
                "Verifica la autenticidad del sitio buscando opiniones en línea",
                "Usa una VPN para mayor privacidad"
            ];
        } else {
            tips = [
                "No descargues archivos ni instales software desde este sitio",
                "No ingreses ningún dato personal o financiero",
                "Considera reportar esta URL a tu proveedor de internet",
                "Si ya ingresaste datos, cambia tus contraseñas inmediatamente",
                "Usa un navegador en modo incógnito si debes acceder"
            ];
        }

        safetyTips.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
        tipsSection.classList.remove('hidden');

        // Scroll to results
        resultContainer.scrollIntoView({ behavior: 'smooth' });
}
});