# Checkbox

<Preview>
  <template slot="demo">
    <components-Checkbox-Checkbox />
  </template>

  <<< @/examples/components/Checkbox/Checkbox.vue
</Preview>

## Propiedades

| Nombre     | Tipo                                   | Descripción                                                                                                                                             | Por defecto |
|------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `id`       | `String`                               | Identificador del input. Si se define un label el id será el label transformando sin carácteres especiales. Si no está definido el label será undefined | `undefined` |
| `name`     | `String`                               | Nombre del input                                                                                                                                        | `undefined` |
| `type`     | `String`                               | Especifica el tipo del input                                                                                                                            | `checkbox`  |
| `label`    | `String`                               | Texto para el label                                                                                                                                     | `undefined` |
| `value`    | `String`, `Boolean`, `Array`, `Object` | Especifica el valor del input                                                                                                                           | `undefined` |
| `disabled` | `Boolean`                              | Deshabilita el checkbox                                                                                                                                 | `false`     |
| `required` | `Boolean`                              | Indica que es obligatorio                                                                                                                               | `false`     |
| `checked`  | `Boolean`                              | Marca el checkbox                                                                                                                                       | `false`     |

