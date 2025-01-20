import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    // This is a simplified sentiment analysis.
    // In a production environment, you would use a proper NLP service
    const keywords = {
      positive: ['great', 'excellent', 'good', 'amazing', 'wonderful', 'fantastic', 'helpful'],
      negative: ['bad', 'poor', 'terrible', 'awful', 'horrible', 'unhelpful', 'disappointed'],
    };

    let score = 0;
    const words = text.toLowerCase().split(' ');

    words.forEach((word: string) => {
      if (keywords.positive.includes(word)) score += 1;
      if (keywords.negative.includes(word)) score -= 1;
    });

    const sentiment = score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral';
    const confidence = Math.min(Math.abs(score) / words.length, 1);

    return NextResponse.json({
      sentiment,
      confidence: confidence * 100,
      score,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to analyze sentiment' },
      { status: 500 }
    );
  }
}
