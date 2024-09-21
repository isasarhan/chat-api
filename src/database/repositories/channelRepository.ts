import { IChannel, ID } from "../../interfaces/inedx.js";
import Channel from "../models/ChannelModel.js";

class ChannelRepository {

    async create(data: IChannel) {
        const channel = new Channel(data)
        return await channel.save()
    }

    async update(id: ID, data: Partial<IChannel>) {
        return await Channel.findById(id, { $set: data }, { new: true })
    }

    async delete(id: ID) {
        return await Channel.findByIdAndDelete(id)
    }

    async findById(id: ID) {
        return await Channel.findById(id).populate(['members', 'admins', 'messages'])
    }

    async findAll() {
        return await Channel.find()
    }

}

export default ChannelRepository