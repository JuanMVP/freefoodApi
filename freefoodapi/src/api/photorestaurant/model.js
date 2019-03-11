import mongoose, { Schema } from 'mongoose'

const photorestaurantSchema = new Schema({
  restaurantId: {
    type: Schema.ObjectId,
    ref: 'Restaurant'

  },


  deleteHash: {
    type: String
  },
  imgurLink: {
    type: String
  },
  restaurantId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

photorestaurantSchema.pre('remove', {query: true}, function(next){
  console.log('Borrando Imagen' + this.imgurLink)
  uploadService.deleteImage(this.deleteHash)
  return next();
})

photorestaurantSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      deleteHash: this.deleteHash,
      imgurLink: this.imgurLink,
      restaurantId: this.restaurantId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Photorestaurant', photorestaurantSchema)

export const schema = model.schema
export default model
