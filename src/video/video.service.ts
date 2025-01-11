import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class VideoService {
  private readonly apiHost = 'yt-api.p.rapidapi.com'; // Hardcoded Host
  private readonly apiKey = 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026'; // Hardcoded API Key

  async getVideoDetails(videoId: string): Promise<any> {
    const url = `https://${this.apiHost}/video/info`; // Base URL
    console.log('Making API request with:', { url, videoId });

    try {
      const response = await axios.get(url, {
        params: { id: videoId }, // Query parameters
        headers: {
          'X-Rapidapi-Host': this.apiHost, // API Host
          'X-Rapidapi-Key': this.apiKey,    // API Key
          'Host': this.apiHost,             // Host (optional, redundant for most APIs)
        },
      });

      return response.data; // Return the data from API response
    } catch (error) {
      console.error('Error during API call:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      throw new HttpException(
        error.response?.data || 'Failed to fetch video details',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
