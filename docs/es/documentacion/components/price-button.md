# Price Button

<Preview>
  <template slot="demo">
    <components-PriceButton-PriceButton />
  </template>
  
  <<< @/examples/components/PriceButton/PriceButton.vue
</Preview>
  
## Propiedades

| Nombre     | Tipo               | Descripción                        | Por defecto |
|------------|--------------------|------------------------------------|-------------|
| `tag`      | `String`           | Etiqueta HTML del componente       | `a`         |
| `href`     | `String`           | Enlace del botón                   | `#`         |
| `text`     | `String`           | Añade un texto pequeño             | `Desde`     |
| `before`   | `String`           | Añade un precio anterior al actual | `undefined` |
| `value`    | `String`, `Number` | Valor del precio                   | `undefined` |
| `inverted` | `Boolean`          | Invierte el botón con la caja      | `false`     |

## Slots

| Nombre    | Descripción        |
|-----------|--------------------|
| `default` | Slot del boton |

### Configuración por defecto

```js
{
    button: {
        tag: 'div',
        color: 'secondary'
    }
}
```

#### Referencias

| Clave    | Componente            |
|----------|-----------------------|
| `button` | [Button](./button.md) |