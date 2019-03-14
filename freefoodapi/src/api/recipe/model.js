import mongoose, { Schema } from 'mongoose'

const recipeSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  ingredients: {
    type: String
  },
  dinnerGuest: {
    type: Number
  },
  picture: {
    type: String
  }
}, {
  strict: false,
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

recipeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      ingredients: this.ingredients,
      dinnerGuest: this.dinnerGuest,
      picture: this.picture,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

/*recipeSchema.pre('remove', {query:true}, function(next){
  Photorecipe
    .find({recipeId: this.id})
    .exec((err, result) => {
      Promise.all(result.map(photorecipe => photorecipe.remove()))
    })
})*/

const model = mongoose.model('Recipe', recipeSchema)

export const schema = model.schema
export default model
