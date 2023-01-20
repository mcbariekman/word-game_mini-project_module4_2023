Const Inputs = Document.QuerySelector(".Inputs"),
HintTag = Document.QuerySelector(".Hint Span"),
GuessLeft = Document.QuerySelector(".Guess-Left Span"),
WrongLetter = Document.QuerySelector(".Wrong-Letter Span"),
ResetBtn = Document.QuerySelector(".Reset-Btn"),
TypingInput = Document.QuerySelector(".Typing-Input");

Let Word, MaxGuesses, IncorrectLetters = [], CorrectLetters = [];

Function RandomWord() {
    Let RanItem = WordList[Math.Floor(Math.Random() * WordList.Length)];
    Word = RanItem.Word;
    MaxGuesses = Word.Length >= 5 ? 8 : 6;
    CorrectLetters = []; IncorrectLetters = [];
    HintTag.InnerText = RanItem.Hint;
    GuessLeft.InnerText = MaxGuesses;
    WrongLetter.InnerText = IncorrectLetters;

    Let Html = "";
    For (Let I = 0; I < Word.Length; I++) {
        Html += `<Input Type="Text" Disabled>`;
        Inputs.InnerHTML = Html;
    }
}
RandomWord();

Function InitGame(E) {
    Let Key = E.Target.Value.ToLowerCase();
    If(Key.Match(/^[A-Za-Z]+$/) && !IncorrectLetters.Includes(` ${Key}`) && !CorrectLetters.Includes(Key)) {
        If(Word.Includes(Key)) {
            For (Let I = 0; I < Word.Length; I++) {
                If(Word[I] == Key) {
                    CorrectLetters += Key;
                    Inputs.QuerySelectorAll("Input")[I].Value = Key;
                }
            }
        } Else {
            MaxGuesses--;
            IncorrectLetters.Push(` ${Key}`);
        }
        GuessLeft.InnerText = MaxGuesses;
        WrongLetter.InnerText = IncorrectLetters;
    }
    TypingInput.Value = "";

    SetTimeout(() => {
        If(CorrectLetters.Length === Word.Length) {
            Alert(`Congrats! You Found The Word ${Word.ToUpperCase()}`);
            Return RandomWord();
        } Else If(MaxGuesses < 1) {
            Alert("Game Over! You Don't Have Remaining Guesses");
            For(Let I = 0; I < Word.Length; I++) {
                Inputs.QuerySelectorAll("Input")[I].Value = Word[I];
            }
        }
    }, 100);
}

ResetBtn.AddEventListener("Click", RandomWord);
TypingInput.AddEventListener("Input", InitGame);
Inputs.AddEventListener("Click", () => TypingInput.Focus());
Document.AddEventListener("Keydown", () => TypingInput.Focus());

Let WordList = [
    {
        Word: "Python",
        Hint: "Programming Language"
    },
    {
        Word: "Guitar",
        Hint: "A Musical Instrument"
    },
    {
        Word: "Aim",
        Hint: "A Purpose Or Intention"
    },
    {
        Word: "Venus",
        Hint: "Planet Of Our Solar System"
    },
    {
        Word: "Gold",
        Hint: "A Yellow Precious Metal"
    },
    {
        Word: "Ebay",
        Hint: "Online Shopping Site"
    },
    {
        Word: "Golang",
        Hint: "Programming Language"
    },
    {
        Word: "Coding",
        Hint: "Related To Programming"
    },
    {
        Word: "Matrix",
        Hint: "Science Fiction Movie"
    },
    {
        Word: "Bugs",
        Hint: "Related To Programming"
    },
    {
        Word: "Avatar",
        Hint: "Epic Science Fiction Film"
    },
    {
        Word: "Gif",
        Hint: "A File Format For Image"
    },
    {
        Word: "Mental",
        Hint: "Related To The Mind"
    },
    {
        Word: "Map",
        Hint: "Diagram Represent Of An Area"
    },
    {
        Word: "Island",
        Hint: "Land Surrounded By Water"
    },
    {
        Word: "Hockey",
        Hint: "A Famous Outdoor Game"
    },
    {
        Word: "Chess",
        Hint: "Related To A Indoor Game"
    },
    {
        Word: "Viber",
        Hint: "A Social Media App"
    },
    {
        Word: "Github",
        Hint: "Code Hosting Platform"
    },
    {
        Word: "Png",
        Hint: "A Image File Format"
    },
    {
        Word: "Silver",
        Hint: "Precious Greyish-White Metal"
    },
    {
        Word: "Mobile",
        Hint: "An Electronic Device"
    },
    {
        Word: "Gpu",
        Hint: "Computer Component"
    },
    {
        Word: "Java",
        Hint: "Programming Language"
    },
    {
        Word: "Google",
        Hint: "Famous Search Engine"
    },
    {
        Word: "Venice",
        Hint: "Famous City Of Waters"
    },
    {
        Word: "Excel",
        Hint: "Microsoft Product For Windows"
    },
    {
        Word: "Mysql",
        Hint: "A Relational Database System"
    },
    {
        Word: "Nepal",
        Hint: "Developing Country Name"
    },
    {
        Word: "Flute",
        Hint: "A Musical Instrument"
    },
    {
        Word: "Crypto",
        Hint: "Related To Cryptocurrency"
    },
    {
        Word: "Tesla",
        Hint: "Unit Of Magnetic Flux Density"
    },
    {
        Word: "Mars",
        Hint: "Planet Of Our Solar System"
    },
    {
        Word: "Proxy",
        Hint: "Related To Server Application"
    },
    {
        Word: "Email",
        Hint: "Related To Exchanging Message"
    },
    {
        Word: "Html",
        Hint: "Markup Language For The Web"
    },
    {
        Word: "Air",
        Hint: "Related To A Gas"
    },
    {
        Word: "Idea",
        Hint: "A Thought Or Suggestion"
    },
    {
        Word: "Server",
        Hint: "Related To Computer Or System"
    },
    {
        Word: "Svg",
        Hint: "A Vector Image Format"
    },
    {
        Word: "Jpeg",
        Hint: "A Image File Format"
    },
    {
        Word: "Search",
        Hint: "Act To Find Something"
    },
    {
        Word: "Key",
        Hint: "Small Piece Of Metal"
    },
    {
        Word: "Egypt",
        Hint: "A Country Name"
    },
    {
        Word: "Joker",
        Hint: "Psychological Thriller Film"
    },
    {
        Word: "Dubai",
        Hint: "Developed Country Name"
    },
    {
        Word: "Photo",
        Hint: "Representation Of Person Or Scene"
    },
    {
        Word: "Nile",
        Hint: "Largest River In The World"
    },
    {
        Word: "Rain",
        Hint: "Related To A Water"
    },
]