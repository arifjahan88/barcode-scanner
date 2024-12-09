"use client";

import React, { useState } from "react";
import Column from "./prompts/Column";
import { BurnBarrel } from "./prompts/BurnBarrel";
import { Button, Space } from "antd";
import Link from "next/link";

export const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <section className="h-screen w-full bg-neutral-800 text-neutral-50">
      <div className="flex flex-col h-full w-full gap-3 overflow-auto p-12">
        <h1 className="text-3xl text-center pb-5 w-full font-semibold">WelCome to Dashboard</h1>
        <div className="flex gap-3 justify-center w-full">
          <Column
            title="Not Categorized"
            column="uncategorized"
            headingColor="text-blue-200"
            cards={cards}
            setCards={setCards}
          />
          <Column
            title="Categorized"
            column="categorized"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
          />
          <div>
            <BurnBarrel setCards={setCards} />
            <Link href="/products">
              <Button className="mt-2 w-full" color="default" variant="outlined">
                Add Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const DEFAULT_CARDS = [
  { title: "Look into render bug in dashboard", id: "1", column: "uncategorized" },
  { title: "SOX compliance checklist", id: "2", column: "uncategorized" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "uncategorized" },
  { title: "Document Notifications service", id: "4", column: "uncategorized" },
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "uncategorized",
  },
  { title: "Postmortem for outage", id: "6", column: "uncategorized" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "uncategorized" },

  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "categorized",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "categorized",
  },
];
