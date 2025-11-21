import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [huzzified, setHuzzified] = useState("");

  const huzzify = (text: string): string => {
    if (!text) return "";
    
    const vowels = "aeiouy";
    let newStr = "";
    
    for (let i = 1; i < text.length; i++) {
      const char = text[i].toLowerCase();
      if (vowels.includes(char)) {
        break;
      }
      newStr += text[i];
    }
    
    return text[0] + newStr + "uzz";
  };

  useEffect(() => {
    setHuzzified(huzzify(inputText));
  }, [inputText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent animate-pulse-glow">
            Huzzify
          </h1>
        </div>

        {/* Main Card */}
        <Card className="max-w-3xl mx-auto p-8 md:p-12 shadow-2xl border-2 border-primary/20 backdrop-blur-sm bg-card/80">
          <div className="space-y-8">
            {/* Input Section */}
            <div className="space-y-3">
              <Label htmlFor="input-text" className="text-lg font-semibold text-foreground text-center block">
                word to huzzify
              </Label>
              <div className="flex justify-center">
                <Input
                  id="input-text"
                  type="text"
                  placeholder="huzz"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="text-2xl h-16 border-2 border-primary/30 focus:border-primary transition-all duration-100 shadow-lg text-center w-auto min-w-[100px] px-4"
                  style={{ width: inputText ? `${Math.max(inputText.length * 2, 10)}ch` : '100px' }}
                />
              </div>
            </div>

            {/* Arrow Indicator */}
            {(
              <div className="flex justify-center">
                <div className="text-6xl text-primary animate-bounce-gentle">
                  ↓
                </div>
              </div>
            )}

            {/* Output Section */}
            <div className="space-y-3">
              <div className="flex justify-center">
                <div
                  id="output-text"
                  className="text-2xl h-16 flex items-center px-6 rounded-md bg-gradient-secondary text-secondary-foreground font-bold shadow-lg transition-all duration-300 w-fit"
                  style={{
                    boxShadow: huzzified ? "var(--shadow-glow)" : "none",
                  }}
                >
                  {huzzified || (
                    <span className="text-secondary-foreground/50 font-normal">
                      huzz
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Card className="p-6 bg-card/60 backdrop-blur-sm border border-border/50">
            <h2 className="text-xl font-semibold mb-3 text-foreground">what it do?</h2>
            <p className="text-muted-foreground leading-relaxed">
              it makes your words like huzz lool
            </p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary-foreground/100 text-primary font-medium">
                hello → huzz
              </div>
              <div className="inline-block px-4 py-2 rounded-full bg-secondary-foreground/100 text-primary font-medium">
                world → wuzz
              </div>
              <div className="inline-block px-4 py-2 rounded-full bg-secondary-foreground/100 text-primary font-medium">
                string → struzz
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
