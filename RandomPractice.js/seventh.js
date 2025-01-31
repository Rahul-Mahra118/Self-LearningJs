let sentenceBuilder={
    subject:"I",
    verb:"am",
    object:"on the roof",
    buildSentence:function(){
       return  this.subject&&this.verb&&this.object
        ?`${this.subject} ${this.verb} ${this.object}`
        :"Incomplete Sentence"
    },
    updatePropertyValue:function(property, value){
                 return this[property]?this[property]=value:"Invalid Property";           
    }
}

console.log(sentenceBuilder.buildSentence())
console.log(sentenceBuilder.updatePropertyValue("object","ra"))
console.log(sentenceBuilder.buildSentence())