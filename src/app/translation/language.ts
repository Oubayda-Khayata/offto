export class Language {
  name: string;
  abbreviation: string;
  dir: string;
  icon: string;

  deserialize(
    abbreviation: string,
    input: any
  ): Language {
    this.name = input.NAME;
    this.abbreviation = abbreviation;
    this.dir = input.DIR;
    this.icon = input.ICON;

    return this;
  }
}
