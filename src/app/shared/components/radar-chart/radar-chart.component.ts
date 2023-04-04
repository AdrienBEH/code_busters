import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokeapi } from 'src/app/shared/models';
import * as echarts from 'echarts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: 'radar-chart.component.html',
  styleUrls: ['radar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadarChartComponent implements OnChanges {
  @Input() public pokemon!: Pokeapi.Pokemon;
  private readonly statsOrder: Array<keyof typeof Pokeapi.stats> = [
    'hp',
    'attack',
    'defense',
    'special-attack',
    'special-defense',
    'speed',
  ];
  public readonly chartOption: echarts.EChartsOption = {
    color: ['#003b72'],
    radar: {
      // Be carefull, order this list according to RadarChartComponent.statsOrder.
      indicator: [
        { text: 'HP', max: 160 },
        { text: 'Atk', max: 160 },
        { text: 'Def', max: 160 },
        { text: 'Sp.Atk', max: 160 },
        { text: 'Sp.Def', max: 160 },
        { text: 'Speed', max: 160 }
      ],
      axisName: {
        color: '#fff',
        backgroundColor: '#666',
        borderRadius: 3,
        padding: [3, 5]
      },
      splitArea: {
        areaStyle: {
          color: ['#bfbfbf', '#fff'],
        }
      },
    },
    series: this.processSeries()
  };

  ngOnChanges(changes: SimpleChanges): void {
    const value: number[] = Array.from(this.pokemon.stats)
    .sort((
      statValueA: Pokeapi.statValue,
      statValueB: Pokeapi.statValue
    ) => this.statsOrder.indexOf(statValueA.stat.name) - this.statsOrder.indexOf(statValueB.stat.name))
    .map((statValue: Pokeapi.statValue) => statValue.base_stat)
    this.chartOption.series = this.processSeries(value);
  }

  processSeries(value: number[] = []): echarts.SeriesOption[] {
    return [
      {
        type: 'radar',
        data: [
          {
            value,
            label: {
              show: true,
              color: '#000',
              fontWeight: 700,
              textBorderWidth: 2,
              textBorderColor: '#fff'
            },
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: '#bfbfbf',
                  offset: 0
                },
                {
                  color: '#003b72',
                  offset: 1
                }
              ])
            }
          }
        ]
      }
    ]
  }
}
