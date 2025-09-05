class MyCustomListener:
    def __init__(self, name):
        self.name = name
        print(f"Listener '{self.name}' initialized.")

    def __enter__(self):
        print(f"Entering with block for listener '{self.name}'. Starting to listen...")
        # Simulate starting a listening process
        self.is_listening = True
        return self # Optional: return self to be bound to 'as' variable

    def listen_for_event(self, event_data):
        if self.is_listening:
            print(f"Listener '{self.name}' received event: {event_data}")
        else:
            print(f"Listener '{self.name}' is not active.")

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Exiting with block for listener '{self.name}'. Stopping listener...")
        self.is_listening = False
        if exc_type:
            print(f"An exception occurred: {exc_type.__name__}: {exc_val}")
        print(f"Listener '{self.name}' stopped.")

# Usage of the custom listener with a 'with' block
with MyCustomListener("EventProcessor") as listener:
    print("Inside the with block.")
    listener.listen_for_event("Data received from network")
    listener.listen_for_event("User clicked button")
    # You could also raise an exception here to see __exit__ handle it
    # raise ValueError("Something went wrong!")

print("Outside the with block.")