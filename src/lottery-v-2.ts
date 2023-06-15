import { Value } from "@graphprotocol/graph-ts";
import { UpdateWinners as UpdateWinnersEvent } from "../generated/LotteryV2/LotteryV2";
import { UpdateWinners } from "../generated/schema";

export function handleUpdateWinners(event: UpdateWinnersEvent): void {
  let entity = new UpdateWinners(event.transaction.from.toHex());
  entity.lotteryID = event.params.lotteryID;
  entity.winners = Value.fromAddressArray(event.params.winners).toBytesArray();

  entity.save();
}
