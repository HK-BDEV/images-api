import { Router } from 'express';
import { getList } from '../controllers/images';

const router = Router();

router.post('/list', getList);

export default router;
