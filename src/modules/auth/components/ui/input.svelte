<script lang="ts">
  export let labelTitle = 'Input value'
  export let type:'email'|'number'|'text'|'password' = 'number'
  export let placeholder = 'Input text'
  export let value: number|string
  const handleInput = e => {
    if(type === 'number'){
      console.log(typeof value)
      if(typeof value !== 'number') throw new Error('value must be a number')
      return value = Number( e.target.value )
    }
    return value = e.target.value
  }
</script>

<div class="form__block">
  <div class="label__row">
    <span> {labelTitle} </span>
  </div>
  <div class="input">
    <input
      {value}
      {type}
      on:input={handleInput}
      {placeholder}
      style="width: 100%;"
      id="form"
    />
  </div>
</div>

<style>
.form__block{

}

.label__row{
  display: flex;
}
.input{
  width: 100%;
}
</style>
