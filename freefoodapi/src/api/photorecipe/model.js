import mongoose, { Schema } from 'mongoose'

const photorecipeSchema = new Schema({
  recipeId: {
    type: Schema.ObjectId,
    ref: 'Recipe'

  },
  deleteHash: {
    type: String
  },
  imgurLink: {
    type: String
  },
  recipeId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

photorecipeSchema.pre('remove', {query: true}, function(next){
  console.log('Borrando Imagen' + this.imgurLink)
  uploadService.deleteImage(this.deleteHash)
  return next();
})

photorecipeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      deleteHash: this.deleteHash,
      imgurLink: this.imgurLink,
      recipeId: this.recipeId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Photorecipe', photorecipeSchema)

export const schema = model.schema
export default model
