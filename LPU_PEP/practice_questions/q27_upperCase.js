/**
 * Part C: Array Methods (Q27)
 * 27. Convert ['js','html','css'] into uppercase using map().
 */

const techs = ['js', 'html', 'css'];
const upperTechs = techs.map(tech => tech.toUpperCase());

console.log("Techs:", techs);
console.log("Uppercase:", upperTechs);
