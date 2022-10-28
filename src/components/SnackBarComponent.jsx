import { Alert, Snackbar } from "@mui/material";

export default function SnackbarComponent({
    open,
    setOpen,
    message,
    severity,
}) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
        >
            <Alert severity={severity}>{message}</Alert>
        </Snackbar>
    );
}
