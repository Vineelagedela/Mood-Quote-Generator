$("#generate").click(function() {
    let name = $("#name").val().trim() || "Friend";
    let mood = $("#mood").val().toLowerCase().trim();

    let quote = "";

    if (mood.includes("happy") || mood.includes("joy") || mood.includes("excited")) {
        quote = `<span class="quote-icon">🌟</span> ${name}, your energy is lighting up the room! Keep shining ✨`;
    }
    else if (mood.includes("sad") || mood.includes("down")) {
        quote = `<span class="quote-icon">💙</span> ${name}, tough times don't last — strong hearts do. You're not alone.`;
    }
    else if (mood.includes("angry") || mood.includes("mad")) {
        quote = `<span class="quote-icon">🍃</span> ${name}, take a deep breath... peace always wins over anger.`;
    }
    else if (mood.includes("tired") || mood.includes("exhausted")) {
        quote = `<span class="quote-icon">🌙</span> ${name}, rest isn't weakness — it's power in disguise. Recharge.`;
    }
    else if (mood.includes("hungry")) {
        quote = `<span class="quote-icon">🍕</span> ${name}, your body is asking for love — time to eat something good! ❤️`;
    }
    else if (mood.includes("miss") || mood.includes("missing") || mood.includes("lonely")) {
        quote = `<span class="quote-icon">🤍</span> ${name}, distance makes the heart grow fonder... they'll be back in your arms soon.`;
    }
    else {
        quote = `<span class="quote-icon">🌈</span> ${name}, whatever you're feeling — it's temporary. You've got this. 💫`;
    }

    $("#quote")
        .removeClass("visible")
        .text("") // clear first
        .delay(100)
        .queue(function(next) {
            $(this).html(quote).addClass("visible");
            next();
        });
});

