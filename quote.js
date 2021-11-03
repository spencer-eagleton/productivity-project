export const quotes = [
    'Anyone who has never made a mistake has never tried anything new', 
    'If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress', 
    'The secret of getting ahead is getting started', 
    'Don’t count the days. Make the days count', 
    'You can, you should, and if you’re brave enough to start, you will', 
    'Tomorrow becomes never. No matter how small the task, take the first step now!'];


export function randomQuote() { 
    
    quotes[Math.floor(Math.random() * quotes.length)];

}







