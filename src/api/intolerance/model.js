import mongoose, { Schema } from 'mongoose'

const intoleranceSchema = new Schema({
  name: {
    type: String
  },

  restaurants:[{
    type: Schema.ObjectId,
    ref: 'Restaurant'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

intoleranceSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      restaurants: this.restaurants,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Intolerance', intoleranceSchema)

export const schema = model.schema
export default model
