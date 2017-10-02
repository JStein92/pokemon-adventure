export class Pokemon {

  constructor(
    public name: string,
    public type: string[],
    public level: number,
    public currentLevelXP: number,
    public totalLevelXP: number,
    public totalAccruedXP: number,
    public currentHP: number,
    public maxHP: number,
    public activeMoves: string[],
    public allMoves: string[],
    public playerActive: boolean,
  ) {}
}
