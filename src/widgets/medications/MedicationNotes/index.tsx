import { Button, Paper } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { IMedication } from '@/entities/medication/types';
import { useContext, useRef } from 'react';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import { addMedicationNote } from '@/app/providers/MedicationProvider/store/medications.actions';

export const MedicationNotes = ({ medication }: { medication: IMedication }) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const { dispatch } = useContext(MedicationContext);
  const notes = medication.notes;

  const handleAddNote = () => {
    if (ref.current) {
      const value = ref.current.value;
      if (value) {
        dispatch(addMedicationNote(medication.uuid, value));
        ref.current.value = '';
      }
    }
  };

  return (
    <div className="medications-note">
      <Paper elevation={3} variant="outlined">
        <div className="medications-note__container">
          <div>
            <div className="medications-note__text-area-wrapper">
              <textarea ref={ref} className="medications-note__text-area" />
            </div>

            <div className="medications-note__add-btn-wrapper">
              <Button onClick={handleAddNote} variant="contained">
                Add Note
              </Button>
            </div>
          </div>
          <ul className="medications-note__list">
            <AnimatePresence mode="wait">
              {notes.map(({ note, uuid }) => (
                <motion.li
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.15 }}
                  key={uuid}
                  className="medications-note__item"
                >
                  {note}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </Paper>
    </div>
  );
};
