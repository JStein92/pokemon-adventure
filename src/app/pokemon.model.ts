export class Pokemon {

  constructor(
    public name: string,
    public sprites: string[],
    public types: string[],
    public level: number,
    public currentLevelXP: number,
    public totalLevelXP: number,
    public totalAccruedXP: number,
    public currentHP: number,
    public maxHP: number,
    public speed: number,
    public attack: number,
    public defense: number,
    public activeMoves: string[],
    public allMoves: string[],
    public equipped: boolean
  ) {}
}
