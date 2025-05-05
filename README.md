# smartCARS3 Screenshots Plugin

## Installation

1. Clone the repository to your local environment
2. Copy `.env.example` to `.env` and configure the plugin directory location
    - Set `VITE_SC3_PLUGIN_DIR` to automatically copy builds to your smartCARS3 directory
3. Update the plugin name in both `package.json` and `plugin.json` files
4. Install dependencies:
   ```
   pnpm install
   ```
5. Build the plugin:
   ```
   pnpm build
   ```

## API Requirements

The plugin requires the following API endpoints to be implemented on your server:

### 1. GET `[sc3_airline_scripturl]/screenshot/retrieve`

Retrieves screenshots associated with a flight.

**Parameters:**
- `bid_id` (query parameter): The ID of the bid/flight

**Response:**
Returns an array of screenshot objects with the following structure:

```typescript
type ServerScreenshot = {
    id: number | string;       // Unique identifier for the screenshot
    url: string;               // URL to access the screenshot
    properties: {
        phase: string;         // Flight phase when screenshot was taken
        latitude: number;      // Geographic coordinates
        longitude: number;     // Geographic coordinates
        simVersion: string;    // Simulator version
    };
    created_at: string;        // ISO 8601 timestamp
};
```

**Example Response:**
```json
[
    {
        "id": 1,
        "url": "https://example.com/screenshot1.png",
        "properties": {
            "phase": "Cruise",
            "latitude": 37.7749,
            "longitude": -122.4194,
            "simVersion": "X-Plane 12"
        },
        "created_at": "2025-06-06T12:00:00Z"
    },
    {
        "id": 2,
        "url": "https://example.com/screenshot2.png",
        "properties": {
            "phase": "Landing",
            "latitude": 34.0522,
            "longitude": -118.2437,
            "simVersion": "X-Plane 12"
        },
        "created_at": "2025-06-06T12:05:00Z"
    }
]
```

### 2. DELETE `[sc3_airline_scripturl]/screenshot/delete`

Deletes a specific screenshot.

**Parameters:**
- `id` (query parameter): The ID of the screenshot to delete

**Response:**
Standard success/error response

### 3. POST `[sc3_airline_scripturl]/screenshot/upload`

Uploads a new screenshot with associated metadata.

**Request Body:**
JSON object containing:
- `bid_id`: Flight ID associated with the screenshot
- `latitude`: Geographic coordinate where screenshot was taken
- `longitude`: Geographic coordinate where screenshot was taken
- `phase`: Flight phase when screenshot was taken
- `sim_version`: Simulator version
- Screenshot image file (multipart/form-data)

## Development

### Auto-Copy for Testing
When `VITE_SC3_PLUGIN_DIR` is set in your `.env` file, the built plugin will be automatically copied to your smartCARS3 plugins directory. This allows for testing in the actual application.

### Testing Options
1. **Testing in smartCARS3:**
    - After building with `pnpm build`, the plugin will be available in smartCARS3
    - To refresh changes, you'll need to click a different plugin and then click back to the Screenshots plugin

2. **Development Mode (Recommended):**
    - Run `pnpm dev` to start the development server
    - This opens the plugin in a browser window (requires smartCARS3 to be running)
    - Changes will hot reload whenever you save a file, providing a much better developer experience

## Credits

- [Jordan Havard](https://github.com/jordanhavard)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.