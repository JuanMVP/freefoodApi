import mongoose, { Schema } from 'mongoose'

const photouserSchema = new Schema({
  userId:{
    type: Schema.ObjectId,
    ref: 'User'
  },
  deleteHash: {
    type: String
  },
  imgurLink: {
    type: String
  },
  userId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

photouserSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      deleteHash: this.deleteHash,
      imgurLink: this.imgurLink,
      userId: this.userId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Photouser', photouserSchema)

export const schema = model.schema
export default model
