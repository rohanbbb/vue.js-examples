# vue-multiselect

## Project setup
```
npm install
```

### Single select without search
```
<multiselect
 `v-model="value"
  :options="selected"
  :searchable="false"
  :show-labels="false"
  placeholder="Select One"
></multiselect>
```

### Single select with search
```
<multiselect
 `v-model="value"
  :options="selected"
  :show-labels="false"
  placeholder="Select One"
></multiselect>
```

### Multiple select without search
```
<multiselect
 `v-model="value"
  :options="selected"
  :searchable="false"
  :multiple="true"
  :show-labels="false"
  placeholder="Select One"
></multiselect>
```

### Multiple select with search
```
<multiselect
 `v-model="value"
  :options="selected"
  :multiple="true"
  :show-labels="false"
  placeholder="Select One"
></multiselect>
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
