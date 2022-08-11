import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("debe de hacer match con el snapshot ", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar las 4 opciones correctamente', () => {
    const lis = wrapper.findAll('li')

    expect(lis.length).toBe(4)
    expect(lis[0].text()).toBe(pokemons[0].name)
    expect(lis[1].text()).toBe(pokemons[1].name)
    expect(lis[2].text()).toBe(pokemons[2].name)
    expect(lis[3].text()).toBe(pokemons[3].name)
  })

  test('debe de emitir "selection" con sus respectivos parámetros al hacer clic', () => {
    const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect(wrapper.emitted('selection').length).toBe(4)
    expect(wrapper.emitted('selection')[0]).toEqual([1])
    expect(wrapper.emitted('selection')[1]).toEqual([2])
    expect(wrapper.emitted('selection')[2]).toEqual([3])
    expect(wrapper.emitted('selection')[3]).toEqual([4])
  })
})
