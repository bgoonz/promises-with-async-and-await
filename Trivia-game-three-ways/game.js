import {
  getClueFromCallback
} from "./callbackVersion.js";
import {
  getClue as getClueFromPromise
} from "./promise-version.js";
document.addEventListener( "DOMContentLoaded", () => {
const responseButton = document.getElementById( "check-response" );
const playerInput = document.getElementById( "player-response" );
const cbBtn = document.getElementById( "use-callback" );
const promBtn = document.getElementById( 'use-promise' );
const idArr = [
  "question",
  "answer",
  "value",
  "category-title",
  "invalidCount",
];
const checkValid = document.getElementById( "invalid-count" );
const setInnerHTML = ( id, object ) => {
  let element = document.getElementById( id );
  if ( object[ id ] !== null ) {
    if ( id === "invalidCount" ) {
      object.invalidCount > 0 && object.invalidCount !== undefined ?
        ( checkValid.innerHTML = "invalid" ) :
        ( checkValid.innerHTML = "valid" );
    } else if ( id === "category-title" ) {
      element.innerHTML = object.category.title;
    } else {
      element.innerHTML = object[ id ];
    }
  }
};
//--------------------------with promise--------------------------------------
promBtn.addEventListener( "click", ( event ) => {
  const get = getClueFromPromise()
  console.log( get );
  idArr.forEach( ( ele ) => {
    setInnerHTML( ele, get );
  } );
} );
//--------------------------with callback--------------------------------------
cbBtn.addEventListener( "click", ( event ) => {
  getClueFromCallback( ( err, clueObj ) => {
    console.log( clueObj );
    err !== null ?
      console.error( err ) :
      idArr.forEach( ( ele ) => {
        setInnerHTML( ele, clueObj );
      } );
  } );
} );
} );
//--------------------

