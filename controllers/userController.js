const UserModel = require('../models/userModel');
const {sendMail} = require('../helpers/sendMail')
exports.registerUser = async (req, res) => {
    try {
        const { name, email,message } = req.body;

        if (!name || !email ) {
            return res.status(400).json({ message: 'Name and email are required' });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const newUser = new UserModel({ name, email ,message});
        sendMail(email, 'Thank You send message', `hi ${name} Thank You send message...`);
        await newUser.save();

        return res.status(201).json({ message: 'User Send message successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server Error' });
    }
};
