"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FarmingGame() {
  const [water, setWater] = useState(0);
  const [fertilizer, setFertilizer] = useState(0);
  const [growth, setGrowth] = useState(0);

  const handleWater = () => {
    setWater((w) => w + 1);
    setGrowth((g) => g + 1);
  };

  const handleFertilizer = () => {
    setFertilizer((f) => f + 1);
    setGrowth((g) => g + 2);
  };

  const getPlantEmoji = () => {
    if (growth < 3) return "🌱";
    if (growth < 6) return "🌿";
    return "🌳";
  };

  return (
    <section className="flex flex-col items-center gap-4 mt-8">
      <div className="text-6xl">{getPlantEmoji()}</div>
      <div className="flex gap-4">
        <Button onClick={handleWater}>Water</Button>
        <Button onClick={handleFertilizer}>Fertilizer</Button>
      </div>
      <div className="text-sm text-muted-foreground">
        Water: {water} | Fertilizer: {fertilizer} | Growth: {growth}
      </div>
    </section>
  );
}
