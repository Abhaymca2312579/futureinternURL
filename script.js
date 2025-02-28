document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const longUrl = document.getElementById('longUrl').value;
    const shortenedUrl = generateShortUrl(longUrl);
    
    document.getElementById('shortenedUrl').innerText = `Shortened URL: ${shortenedUrl}`;
});

function generateShortUrl(longUrl) {
    // Simple hash function for demonstration purposes
    const hash = btoa(longUrl).substring(0, 8); // Base64 encode and take first 8 characters
    return `https://short.url/${hash}`;
}
