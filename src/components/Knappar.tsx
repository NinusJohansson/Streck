import { Dryck } from "@prisma/client";
import { PrismaClientRustPanicError } from "@prisma/client/runtime";
import { useState } from "react";
import { buttonciderRouter, buttonohlRouter, buttonspritRouter } from "~/server/api/routers/buttonohl";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";
import { Button } from "./Button";

const viewStats = api.stats.getStats.useQuery()


function handleClickohl(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();

  console.log(viewStats.data)
}

function handleClickcider(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();

  console.log("cider")
}

function handleClicksprit(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();

  console.log("sprit")
}

export function Knappar() {
  const ohlbutton = api.button.ohlpress.useMutation()
  const ciderbutton = api.ciderbutton.ciderpress.useMutation()
  const spritbutton = api.spritbutton.spritpress.useMutation()

    return <form className="flex flex-col justify-center">
        <Button className="self-center" onClick={handleClickohl}>Øhl</Button>
        <Button className="self-center" onClick={handleClickcider}>Cider</Button>
        <Button className="self-center" onClick={handleClicksprit}>Sprit</Button>
    </form>
};