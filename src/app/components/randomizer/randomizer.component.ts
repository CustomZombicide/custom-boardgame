import {Component, inject, TemplateRef} from '@angular/core';
import {Players} from "../../constant/players";
import {HeroModel} from "../../model/hero.model";
import {HeroTypeEnum} from "../../enum/hero-type.enum";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModal, NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-randomizer',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgbPagination
  ],
  templateUrl: './randomizer.component.html',
  styleUrl: './randomizer.component.scss'
})
export class RandomizerComponent {
  zombiePlayers: HeroModel[] = [];
  heroPlayers: HeroModel[] = [];
  randomSelection: any;
  hero: HeroModel | undefined;
  enableCard: boolean = false;
  randomSelections: HeroModel[] = [];
  private modalService: NgbModal;
  showFiltersMobile: boolean = false;
  numberOfPlayers: string = '';
  constructor(modalService: NgbModal) {
    this.modalService = modalService;
    this.zombiePlayers = Players.filter(hero => hero.heroType === HeroTypeEnum.ZOMBIE);
    this.heroPlayers = Players.filter(hero => hero.heroType === HeroTypeEnum.SURVIVOR);
  }

  randomize(heroType: HeroTypeEnum,) {
    const selection = heroType === HeroTypeEnum.SURVIVOR ? this.heroPlayers : this.zombiePlayers;
    const shuffledSelection = this.shuffle(selection);
    this.randomSelections = shuffledSelection.slice(0, Number(this.numberOfPlayers));
    this.enableCard = true;
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  openFullscreen(content: TemplateRef<any>, hero: HeroModel) {
    this.hero = hero;
    this.modalService.open(content, { size: "xl" });
  }

  toggleFiltersMobile(): void {
    this.showFiltersMobile = !this.showFiltersMobile;
  }

  protected readonly HeroTypeEnum = HeroTypeEnum;
}
