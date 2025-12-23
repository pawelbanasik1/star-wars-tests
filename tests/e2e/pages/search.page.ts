import { Page, Locator } from '@playwright/test';
import { SearchType } from '../types';
import { BasePage } from './base.page';

export class SearchPage extends BasePage {
  readonly url: string = '/';
  readonly input: Locator;
  readonly submitButton: Locator;
  private radioMap: Record<SearchType, Locator>;

  constructor(page: Page) {
    super(page);
    this.input = page.locator('#query');
    this.submitButton = page.getByRole('button', { name: 'Search' });
    this.radioMap = {
      [SearchType.People]: page.locator('#people'),
      [SearchType.Planets]: page.locator('#planets'),
    };
  }

  async selectSearchType(type: SearchType) {
    await this.radioMap[type].check();
  }

  async searchUsingSubmitButton(text: string) {
    await this.input.fill(text);
    await this.submitButton.click();
  }

  async searchUsingEnterButton(text: string) {
    await this.input.fill(text);
    await this.input.press('Enter');
  }

  getAllPlanetResults() {
    return this.page.locator('app-planet .card');
  }

  getPlanetResultBySearch(name: string): Locator {
    return this.page.locator('app-planet .card').filter({ hasText: name });
  }

  getPeopleResultBySearch(name: string): Locator {
    return this.page.locator('app-character .card').filter({ hasText: name });
  }

  getSearchRowByProperty(property: string): Locator {
    return this.page.locator('.row').filter({ hasText: property });
  }
}
