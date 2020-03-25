import { Router } from 'express'
const router = Router();

// Database connection
import { connect } from '../database'

// Conversion ObjectID
import { ObjectID } from 'mongodb'

// GET all task
router.get('/', async (req,res) =>{
    const db = await connect();
    const result = await db.collection('task').find({}).toArray();
    res.json(result);
});

// GET id task
router.get('/:id', async (req,res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('task').findOne({_id: ObjectID(id) });

    res.json(result);
});

// POST task
router.post('/', async (req,res) =>{
    const db = await connect();
    const task = {
        task: req.body.task,
        des: req.body.des
    }
    const result = await db.collection('task').insert(task);
    res.json(result.ops[0]);
});

// DELETE task by id 
router.delete('/:id', async (req,res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('task').deleteOne({_id: ObjectID(id)});
    res.json({
        message: `tarea ${id} eliminado`,
        result
    })
});

// UPDATE task by id
router.put('/:id', async (req,res) =>{
    const {id} = req.params;
    const updateTask = {
        task: req.body.taks,
        des: req.body.des
    }
    const db = await connect();
    const result = await db.collection('task').updateOne({_id: ObjectID(id)},{$set: updateTask});
    res.json({
        message: `tarea ${id} actualizada`
    })
});


export default router;