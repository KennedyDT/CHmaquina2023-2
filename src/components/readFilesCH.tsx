import { FC } from "react";
import Button from '@mui/material/Button';
import CloudUpload from '@mui/icons-material/CloudUpload';

import Tooltip from '@mui/material/Tooltip';

interface ReadingImportFormFilterProps {}

const ReadFilesCHComponent: FC<ReadingImportFormFilterProps> = ({}) => {
  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   // Hacer algo con el archivo seleccionado...
  // };

  return (
    <div>
      <Tooltip title="Cargar archivo CH">
        <label htmlFor="CH_upload">
          <Button component="span" variant="contained">
            <CloudUpload />
          </Button>
        </label>
      </Tooltip>
      <input
        type="file"
        id="CH_upload"
        name="CH_upload"
        accept=".ch"
        // onChange={handleFileUpload}
        style={{ display: 'none' }} // Oculta el input de tipo archivo
      />
    </div>
  );
};

export default ReadFilesCHComponent;
