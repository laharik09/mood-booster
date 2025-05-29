const moodInput = document.getElementById("moodInput");
const quote = document.getElementById("quote");
const gif = document.getElementById("gif");
const emoji = document.getElementById("emoji");
const music = document.getElementById("music");
const modeToggle = document.getElementById("modeToggle");
const modeLabel = document.getElementById("modeLabel");

modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    modeLabel.innerText = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
});

function boostMood() {
    const mood = moodInput.value.toLowerCase();

    const responses = {
        sad: {
            quote: "Tough times don’t last. Tough people do. 💪",
            gif: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/line-friends-full-of-love-1/sticker_18.gif?bca0ac34d9e6648e53cf4601bea73f6e&d=200x200",
            emoji: "😢"
        },
        tired: {
            quote: "Rest if you must, but don’t quit. 💤",
            gif: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/molang/sticker_23.png?a85c4c7405eadd73ea003cc89124f8b6&d=200x200",
            emoji: "😴"
        },
        happy: {
            quote: "Happiness is contagious — share it! 😄",
            gif: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/line-friends-full-of-love-1/sticker_2.gif?bca0ac34d9e6648e53cf4601bea73f6e&d=200x200",
            emoji: "😊"
        },
        stressed: {
            quote: "Take a deep breath. Take some food..you feel better 🌿",
            gif: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/molang/sticker_29.png?a85c4c7405eadd73ea003cc89124f8b6&d=200x200",
            emoji: "😖"
        },
        thankyou: {
            quote: "Welcome Dear.Take care....",
            gif: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/line-friends-full-of-love-1/sticker_1.gif?bca0ac34d9e6648e53cf4601bea73f6e&d=200x200",
            emoji: "😍"
        },
        angry: {
            quote: "It’s okay to feel angry — just don’t let it steal your smile.",
            gif: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/molang/sticker_8.png?a85c4c7405eadd73ea003cc89124f8b6&d=200x200",
            emoji: "😎"
        }

    };
    if (responses[mood]) {
        quote.innerText = responses[mood].quote;
        gif.src = responses[mood].gif;
        gif.style.display = "center";
        emoji.innerText = responses[mood].emoji;

        // ✅ Change font style using JavaScript
        quote.style.fontFamily = "Georgia, serif";
        quote.style.fontSize = "1.2rem";
        quote.style.fontStyle = "italic";
        quote.style.fontWeight = "600";
    } else {
        quote.innerText = "Hmm... I'm not sure how to help with that mood, but you're amazing anyway! 💖";
        gif.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/line-friends-full-of-love-1/sticker_11.gif?bca0ac34d9e6648e53cf4601bea73f6e&d=200x200";
        emoji.innerText = "🙂";
        quote.style.fontFamily = "Georgia, serif";
        quote.style.fontSize = "1.2rem";
        quote.style.fontStyle = "italic";
        quote.style.fontWeight = "600";
    }
}